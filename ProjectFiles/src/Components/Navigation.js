import React, {useState, useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "../Assets/index.css"


function NavigationBar(){
    const [top, setTop] = useState(true)

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY < 10) {
                setTop(true)
            } else {
                setTop(false)
            }

        }
    },[top])


    const NavStyles = {
        Navbar:{
            borderRadius: top ? '0':'28px',
            boxShadow:top ? '0 0 0 0':'2px 1px 15px -8px',
            marginRight: '20px',
            marginLeft: '20px',
            marginTop: '10px',
            top: '10px',
            backgroundColor:'#ffffff',
        },
    }


    return(
        <>
            <Navbar style={NavStyles.Navbar} expand={'lg'} sticky='top'>
                    <Navbar.Brand href='#home'>
                        <img
                            src='https://www.givelify.com/wp-content/themes/givelify/assets/images/logo.svg?ver=2.4'
                            alt='test'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border:'none'}}><FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <div className="d-flex justify-content-center">
                                    <NavDropdown title={<div style={{display:'inline-block', marginRight:'5px', fontFamily: 'Libre'}}>Popular Authors<FontAwesomeIcon icon={faAngleDown} style={{marginLeft:'10px'}}/></div>} className={`${styles.dropdownToggle}`}>
                                    <NavDropdown.Item>Sam Crescent</NavDropdown.Item>
                                    <NavDropdown.Item>Suzanne Collins</NavDropdown.Item>
                                    <NavDropdown.Item>Eve Vaughn</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title={<div style={{display:'inline-block', fontFamily: 'Libre'}}>Popular Genres<FontAwesomeIcon icon={faAngleDown} style={{marginLeft:'10px'}}/></div>} id="collapsible-nav-dropdown">
                                    <NavDropdown.Item>Science Fiction</NavDropdown.Item>
                                    <NavDropdown.Item>Romance</NavDropdown.Item>
                                    <NavDropdown.Item>Fantasy</NavDropdown.Item>
                                    <NavDropdown.Item>More</NavDropdown.Item>
                                </NavDropdown>
                                </div>
                            </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                style={{borderRadius:"18px"}}
                                placeholder="&#xf002;"
                                className="me-2"
                                aria-label="Search"
                                />
                        </Form>
                    </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default NavigationBar