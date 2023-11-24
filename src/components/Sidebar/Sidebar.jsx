import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faToolbox, faScrewdriverWrench, faComment, faPhoneVolume, faBars, faRightFromBracket, faChainBroken, faChainSlash, faChartArea, faChartBar, faChartColumn, faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal } from 'antd';

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar({ children }) {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

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

    // const handleLogout = () => {
    //     localStorage.removeItem('isLogin')
    //     localStorage.removeItem('ID_User')
    //     localStorage.removeItem('avatar')
    //     localStorage.removeItem('MSSV')
    //     localStorage.removeItem('role')
    //     navigate('/login');

    // }

    const location = useLocation();
    const url = location.pathname;

    const navigator = useNavigate();

    const role = localStorage?.getItem('role');
    if (role != 'AD') {
        return navigator('/denied');
    }
    return (
        <div className={cx("container2")}>
            <div style={{ width: isOpen ? "200px" : "50px" }} className={cx("sidebar")}>
                <div className={cx("heightSidebar")}>
                    <div className={cx("top_section")}>
                        <h1 style={{ display: isOpen ? "block" : "none", transition: "0.5s" }} className={cx("logo")}>REPAIR</h1>
                        <div style={{ marginLeft: isOpen ? "30px" : "0px", transition: "0.5s" }} className={cx("bars")}>
                            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} onClick={toggle} />
                        </div>
                    </div>
                    <Link to={"/admin"} className={cx("link", { active: url.includes("/admin") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Admin</div>
                    </Link>
                    <Link to={"/infoadmin"} className={cx("link", { active: url.includes("/infoadmin") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Info</div>
                    </Link>
                    <Link to={"/itemadmin"} className={cx("link", { active: url.includes("/itemadmin") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faToolbox} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Item</div>
                    </Link>
                    <Link to={"/repairadmin"} className={cx("link", { active: url.includes("/repairadmin") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Repair</div>
                    </Link>
                    <Link to={"/contactadmin"} className={cx("link", { active: url.includes("/contactadmin") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Contact</div>
                    </Link>
                    <Link to={"/dashboard"} className={cx("link", { active: url.includes("/dashboard") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faChartSimple} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Dashboard</div>
                    </Link>
                    <div className={`${cx("link2")}`} onClick={showModal}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Logout</div>
                    </div>

                    <Modal title="Đăng xuất" open={isModalOpen} onOk={handleOk} okText={"Đăng xuất"} cancelText={"Đóng"} onCancel={handleCancel} okButtonProps={{ style: { background: 'red' } }}  >
                        Bạn có chắc chắn muốn đăng xuất
                    </Modal>
                    {/* {
                        menuItem.map((item, index) => (
                            <Link to={item.path} key={index} className={cx("link")}>
                                <div className={cx("icon")}>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>{item.name}</div>
                            </Link>
                            
                        ))
                    } */}
                </div>
            </div>
            <main> {children}</main>
        </div>
    );
}

export default Sidebar;