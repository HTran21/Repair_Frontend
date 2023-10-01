import classNames from "classnames/bind";
import styles from "./Info.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faHouse, faVenusMars, faPenToSquare, faTrash, faMagnifyingGlass, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className="container">
            <div className={cx("contentInfo")}>
                <div className="row ">
                    <div className={`col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center`}>
                        <div className={cx("infoUser")}>
                            <img className={cx("imgUser")} src="https://i.pinimg.com/564x/15/26/9f/15269f9a4e469e93eccbc7da0807c253.jpg" />

                            <div className={cx("nameUser")}>
                                Trần Hoàng Trân
                            </div>
                            <div className={cx("contentInfoUser")}>
                                <div className={cx("groupInput")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} size="lg" icon={faAddressCard} /></span>
                                    <input className={cx("inputInfo")} type="text" disabled value={"B2014798"} />
                                </div>
                                <div className={cx("groupInput")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} size="lg" icon={faVenusMars} /></span>
                                    <input className={cx("inputInfo")} type="text" disabled value={"Nam"} />
                                </div>
                                <div className={cx("groupInput")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} size="lg" icon={faHouse} /></span>
                                    <input className={cx("inputInfo")} type="text" disabled value={"AA02310"} />
                                </div>
                                <div className={cx("groupInput")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} size="lg" icon={faEnvelope} /></span>
                                    <input className={cx("inputInfo")} type="text" disabled value={"tranb2014798@student.ctu.edu.vn"} />
                                </div>
                                <button className={cx("btnEdit")}>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-8 col-md-6 col-sm-12`}>
                        <div className={cx("listRepair")}>
                            <p className={cx("titleList")}>DANH SÁCH ĐĂNG KÝ</p>
                            <div className={cx("search")}>
                                <span className={cx("inconSearch")}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7c7e83", }} /></span>
                                <input type="text" className={cx("inputSearch")} placeholder='Search...' />
                            </div>
                            <div className={`text-center ${cx("tableUser")}`}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr >
                                            <th>ID</th>
                                            <th>Tên vật dụng</th>
                                            <th>Số lượng</th>
                                            <th>Ngày đăng ký</th>
                                            <th></th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Bồn cầu</td>
                                            <td>1</td>
                                            <td>14/9/2023</td>
                                            <td>
                                                <FontAwesomeIcon className={cx("iconTable")} icon={faPenToSquare} />
                                                <FontAwesomeIcon className={cx("iconTable")} icon={faTrash} />

                                            </td>
                                            <td>
                                                <FontAwesomeIcon className={cx("iconCheck")} icon={faCheck} size="lg" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Chậu rửa mặt</td>
                                            <td>2</td>
                                            <td>14/9/2023</td>
                                            <td>
                                                <FontAwesomeIcon className={cx("iconTable")} icon={faPenToSquare} />
                                                <FontAwesomeIcon className={cx("iconTable")} icon={faTrash} />
                                            </td>
                                            <td>
                                                <FontAwesomeIcon className={cx("iconError")} icon={faXmark} size="lg" />
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Info;