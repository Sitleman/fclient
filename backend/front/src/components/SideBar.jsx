import React from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import {faAnchor, faBrush, faGlobe, faMuseum, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SideBar = props => {
    return (
        <>
            { props.expanded &&
                <Nav className={"flex-column my-sidebar my-sidebar-expanded"}>
                    <Nav.Item><Nav.Link as={Link} to="/countries"><FontAwesomeIcon icon={faGlobe} />{' '}Страны</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={Link} to="/artists"><FontAwesomeIcon icon={ faBrush } />{' '}Художники</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={Link} to="/museums"><FontAwesomeIcon icon={faMuseum } />{' '}Музеи</Nav.Link></Nav.Item>
                    {/*<Nav.Item><Nav.Link as={Link} to="/users"><FontAwesomeIcon icon={faUser} />{' '}Пользователи</Nav.Link></Nav.Item>*/}
                </Nav>
            }
            { !props.expanded &&
                <Nav className={"flex-column my-sidebar my-sidebar-collapsed"}>
                    <Nav.Item><Nav.Link as={Link} to="/countries"><FontAwesomeIcon icon={faGlobe} size="2x" /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={Link} to="/artists"><FontAwesomeIcon icon={faBrush} size="2x" /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={Link} to="/museums"><FontAwesomeIcon icon={faMuseum} size="2x" /></Nav.Link></Nav.Item>
                    {/*<Nav.Item><Nav.Link as={Link} to="/users"><FontAwesomeIcon icon={faUser} size="2x" /></Nav.Link></Nav.Item>*/}
                </Nav>
            }
        </>
    )
}

export default SideBar;
