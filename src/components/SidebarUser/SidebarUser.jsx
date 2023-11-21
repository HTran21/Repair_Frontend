import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faToolbox, faScrewdriverWrench, faComment, faPhoneVolume, faBars, faRightFromBracket, faUser, faUserPen, faAddressCard, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal } from 'antd';

import classNames from "classnames/bind";
import styles from "./SidebarUser.module.scss";

const cx = classNames.bind(styles);

function SidebarUser({ children }) {

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

    const location = useLocation();
    const url = location.pathname;
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
                    <Link to={"/info"} className={cx("link", { active: url.includes("/info") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>User</div>
                    </Link>
                    <Link to={"/editinfo"} className={cx("link", { active: url.includes("/editinfo") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", padding: "0px" }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Edit</div>
                    </Link>
                    <Link to={"/userrepair"} className={cx("link", { active: url.includes("/userrepair") })}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Repair</div>
                    </Link>
                    <Link to={""} className={cx("link")}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Contact</div>
                    </Link>
                    <Link to={""} className={cx("link")}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faComment} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Comment</div>
                    </Link>
                    <hr></hr>
                    <Link to={"/home"} className={cx("link")}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Home</div>
                    </Link>
                    <div className={`${cx("link2")}`} onClick={showModal}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Logout</div>
                    </div>
                    <Modal title="Đăng xuất" open={isModalOpen} onOk={handleOk} okText={"Đăng xuất"} cancelText={"Đóng"} onCancel={handleCancel} okButtonProps={{ style: { background: 'red' } }}  >
                        Bạn có chắc chắn muốn đăng xuất
                    </Modal>
                </div>
            </div>
            <main> {children}</main>
        </div>
    );
}

export default SidebarUser;