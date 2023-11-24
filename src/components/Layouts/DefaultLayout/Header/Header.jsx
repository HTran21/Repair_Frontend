import styles from "./Header.module.scss";
import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";

import { Modal } from 'antd';

const cx = classNames.bind(styles);


function Header() {

    const location = useLocation();
    const url = location.pathname;

    const navigate = useNavigate();
    const [MSSV, setMSSV] = useState(localStorage.getItem("MSSV"));
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === 'true');
    const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        localStorage.removeItem('isLogin')
        localStorage.removeItem('ID_User')
        localStorage.removeItem('avatar')
        localStorage.removeItem('MSSV')
        localStorage.removeItem('role')
        navigate('/login');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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

                            <Link className={`text-decoration-none ${cx("navLinkColor", { active: url.includes("/contact") })}`} to={isLogin ? '/contact' : '/login'} ><p>Contact</p></Link>

                            {isLogin ? (
                                <Tippy
                                    interactive
                                    placement='bottom'
                                    render={attrs => (
                                        <Wrapper>
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                <ul>
                                                    <Link to={`/info`} className="text-decoration-none text-light">
                                                        <li>User</li>
                                                    </Link>
                                                    <li onClick={showModal}>Logout</li>
                                                </ul>
                                            </div>
                                        </Wrapper>

                                    )}
                                >
                                    <div className={cx("infoUser")}>
                                        <img src={`http://localhost:3000/${avatar}`} className={cx("imgUser")} />
                                        <span className={cx("nameUser")}>{MSSV}</span>
                                    </div>
                                </Tippy>
                            ) : (
                                <Link to={"/login"} className="d-flex text-decoration-none">
                                    < div className={cx("infoUser")}>
                                        <button className={cx("btnLogin")}>Login</button>

                                    </div>
                                </Link>

                            )}


                            <Modal title="Đăng xuất" open={isModalOpen} onOk={handleOk} okText={"Đăng xuất"} cancelText={"Đóng"} onCancel={handleCancel} okButtonProps={{ style: { background: 'red' } }}  >
                                Bạn có chắc chắn muốn đăng xuất
                            </Modal>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar >

        </div >
    );
}

export default Header;