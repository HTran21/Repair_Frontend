import classNames from "classnames/bind";
import styles from "./Admin.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faScrewdriverWrench, faMagnifyingGlass, faTrash, faPenToSquare, faCircleInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';


const cx = classNames.bind(styles)


function Admin() {
    return (
        <div className={`${cx("adminPage")}`}>
            <div className={` row ${cx("controlAdmin")} d-flex justify-content-between`}>
                <div className="col m-auto p-0">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")}>
                            <FontAwesomeIcon size="xl" icon={faMessage} />

                        </div>
                        <div className={cx("contentNofitication")}>
                            47
                            <div>Tin nhắn</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")}>
                            <FontAwesomeIcon size="xl" icon={faUser} />

                        </div>
                        <div className={cx("contentNofitication")}>
                            47
                            <div>Người dùng</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" />

                        </div>
                        <div className={cx("contentNofitication")}>

                            <div>Danh sách đăng ký</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")}>
                            <FontAwesomeIcon icon={faUserPlus} size="xl" />

                        </div>
                        <div className={cx("contentNofitication")}>

                            <div>Thêm người dùng</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${cx("listUser")}`}>
                <p className={cx("titleUser")}>Danh sách người dùng</p>
                <div className={cx("search")}>
                    <span className={cx("inconSearch")}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7c7e83", }} /></span>
                    <input type="text" className={cx("inputSearch")} placeholder='Search...' />
                </div>
                <div className={`text-center ${cx("tableUser")}`}>
                    <Table striped bordered hover>
                        <thead>
                            <tr >
                                <th>MSSV</th>
                                <th>Họ tên</th>
                                <th>Giới tính</th>
                                <th>Phòng</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B2014798</td>
                                <td>Trần Hoàng Trân</td>
                                <td>Nam</td>
                                <td>AA02310</td>
                                <td>tranb201798@student.ctu.edu.vn</td>
                                <td>
                                    <FontAwesomeIcon className={cx("iconTable")} icon={faPenToSquare} />
                                    <FontAwesomeIcon className={cx("iconTable")} icon={faTrash} />
                                    <FontAwesomeIcon className={cx("iconTable")} size="lg" icon={faCircleInfo} />

                                </td>
                            </tr>
                            <tr>
                                <td>B2014798</td>
                                <td>Trần Hoàng Trân</td>
                                <td>Nam</td>
                                <td>AA02310</td>
                                <td>tranb201798@student.ctu.edu.vn</td>
                                <td>
                                    <FontAwesomeIcon className={cx("iconTable")} icon={faPenToSquare} />
                                    <FontAwesomeIcon className={cx("iconTable")} icon={faTrash} />
                                    <FontAwesomeIcon className={cx("iconTable")} size="lg" icon={faCircleInfo} />
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Admin;