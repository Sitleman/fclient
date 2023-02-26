package com.example.fclient;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.TextView;

import com.example.fclient.databinding.ActivityMainBinding;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    // Used to load the 'fclient' library on application startup.
    static {
        System.loadLibrary("fclient");
        System.loadLibrary("mbedcrypto");
    }

    private ActivityMainBinding binding;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        int res = initRng();
        byte[] key = randomBytes(16);

        String strKey = "1234567890123456";
        String strData = "Hello, World ;)";
        key = strKey.getBytes();
        byte[] data = strData.getBytes(StandardCharsets.UTF_8);

        byte[] encData = encrypt(key, data);
        byte[] decData = decrypt(key, encData);

        // Example of a call to a native method
        TextView tv = binding.sampleText;
        tv.setText(new String(data, StandardCharsets.UTF_8));
//        tv.setText(Arrays.toString(data));
        tv.append("\n");
//        tv.setText(new String(data, StandardCharsets.UTF_8));
        tv.append(Arrays.toString(encData));
        tv.append("\n");
        tv.append(new String(decData, StandardCharsets.UTF_8));
//        tv.append(Arrays.toString(decData));
    }

    /**
     * A native method that is implemented by the 'fclient' native library,
     * which is packaged with this application.
     */
    public native String stringFromJNI();
    public static native int initRng();
    public static native byte[] randomBytes(int no);
    public static native byte[] encrypt(byte[] key, byte[] data);
    public static native byte[] decrypt(byte[] key, byte[] data);
}