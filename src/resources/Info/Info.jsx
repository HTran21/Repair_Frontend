import classNames from "classnames/bind";
import styles from "./Info.module.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faIdCard, faPhone, faTag, faUserLock } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className="container">
            <div className={cx("contentPage")}>
                <div className={cx("titlePage")}>
                    <h1 className="text-dark">PROFILE</h1>
                </div>
                <div className={cx("contentInfo")}>
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-sm-12">
                            <div className={cx("leftInfo")}>
                                <h2>AVATAR</h2>
                                <img className={cx("imageUser")} src="https://i.pinimg.com/564x/bb/93/99/bb93993d644835d9aa673c760cad0585.jpg" alt="" />
                                <h3 className="text-center">Sinh Viên</h3>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8 col-sm-12">
                            <div className={cx("rightInfo")}>
                                <h2>INFO USER</h2>
                                <div className={cx("infoUser")}>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faIdCard} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="B2014798" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faAddressCard} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="Trần Hoàng Trân" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faEnvelope} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="tran@gmail.com" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faPhone} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="097543158" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faUserLock} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="SV" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;