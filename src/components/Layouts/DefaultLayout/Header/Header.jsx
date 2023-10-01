import styles from "./Header.module.scss";
import classNames from 'classnames/bind';
import { Link, useLocation } from "react-router-dom";
// import Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Tippy for dropdown
import Tippy from '@tippyjs/react/headless';
// Wrapper
import Wrapper from '../../../Popper/Wrapper';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGear } from '@fortawesome/free-solid-svg-icons';



const cx = classNames.bind(styles);


function Header() {

    const location = useLocation();
    const url = location.pathname;

    return (
        <div className="bg-primary bg-opacity-25 p-1">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='../../../../../img/logo/logo1.jpg' className={cx("imgLogo")} />

                    </Navbar.Brand>
                    <span className={cx("textLogo")}>REPAIR</span>
                    <Navbar.Toggle
                        children={<FontAwesomeIcon icon={faGear} size="xl" style={{ color: "#ffffff", }} />}
                        className={cx("bgToggle")} aria-controls="basic-navbar-nav" style={{
                            width: "60px",
                            border: "1px #585858 solid",
                            height: "40px",
                            boxShadow: "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca",

                        }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className={`text-decoration-none ${cx("navLinkColor", { active: url.includes("/home") })}`} to="/home" ><p>Home</p></Link>

                            <Link className={`text-decoration-none ${cx("navLinkColor", { active: url.includes("/about") })}`} to="/about" ><p>About</p></Link>


                            <Link className={`text-decoration-none ${cx("navLinkColor", { active: url.includes("/item") })}`} to="/item" ><p>Item</p></Link>

                            <Link className={`text-decoration-none ${cx("navLinkColor", { active: url.includes("/contact") })}`} to="/contact" ><p>Contact</p></Link>


                            <Tippy
                                interactive
                                placement='bottom'
                                render={attrs => (
                                    <Wrapper>
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <ul>
                                                <li>Trang ca nhan</li>
                                                <li>Dang Xuat</li>
                                                <li>Dang Xuat</li>
                                            </ul>
                                        </div>
                                    </Wrapper>

                                )}
                            >
                                <div className={cx("infoUser")}>
                                    <img src='../../../../../img/logo/avatar.jpg' className={cx("imgUser")} />
                                    <span className={cx("nameUser")}>Tran</span>
                                </div>
                            </Tippy>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar >

        </div >
    );
}

export default Header;