import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faToolbox, faScrewdriverWrench, faComment, faPhoneVolume, faBars, faRightFromBracket, faUser, faUserPen, faAddressCard, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./SidebarUser.module.scss";

const cx = classNames.bind(styles);

function SidebarUser({ children }) {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    // const menuItem = [
    //     {
    //         path: "/admin",
    //         name: "Admin",
    //         icon: <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} />
    //     },
    //     {
    //         path: "/itemadmin",
    //         name: "Item",
    //         icon: <FontAwesomeIcon icon={faToolbox} style={{ color: "#ffffff", }} />
    //     },
    //     {
    //         path: "/admin",
    //         name: "Repair",
    //         icon: <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: "#ffffff", }} />
    //     },
    //     {
    //         path: "/contact2",
    //         name: "Contact",
    //         icon: <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffffff", }} />
    //     },
    //     {
    //         path: "/admin",
    //         name: "Comment",
    //         icon: <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff", }} />
    //     },
    // ]

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
                    <Link to={"/home"} className={`${cx("link2")}`}>
                        <div className={cx("icon")}><FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", }} /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={cx("link_text")}>Back</div>
                    </Link>
                </div>
            </div>
            <main> {children}</main>
        </div>
    );
}

export default SidebarUser;