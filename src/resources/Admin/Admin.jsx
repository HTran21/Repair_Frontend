import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faScrewdriverWrench, faMagnifyingGlass, faTrash, faPenToSquare, faCircleInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Table, Tag } from "antd";
import axios from "axios";


const cx = classNames.bind(styles)


function Admin() {



    const columns = [
        {
            title: 'STT',
            dataIndex: 'ID_User',
            key: 'id',
            sorter: (a, b) => a.ID_User - b.ID_User,
            render: (text, object, index) => { return index + 1 },
            align: 'center',
        },
        {
            title: 'MSSV',
            dataIndex: 'MSSV',
            key: 'MSSV',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.MSSV.localeCompare(b.MSSV),
            align: 'center',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoten',
            key: 'hoten',
            sorter: (a, b) => a.hoten.length - b.hoten.length,
            align: 'center',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'eamil',
            align: 'center',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (role) => {
                let color;
                if (role === 'AD') {
                    color = 'geekblue';
                } else {
                    color = 'green';
                }
                return (
                    <Tag color={color} key={role}>
                        {role.toUpperCase()}
                    </Tag>
                )
            },
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (record) => {
                return (
                    <>
                        <button className={cx("iconTable")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className={cx("iconTable")}><FontAwesomeIcon icon={faTrash} /></button>
                        <button className={cx("iconTable")}><FontAwesomeIcon icon={faCircleInfo} /></button>
                    </>
                )
            }
        },

    ];

    const [data, setData] = useState();


    const fetchData = () => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        fetchData();

    }, [])

    const [pagination, setPagination] = useState({});

    function handleTableChange() {

        requestToServer().then((data) => {
            pagination.total = your_value;
            setPagination(pagination);
        })
    }



    return (
        <div className={`${cx("adminPage")} container`}>
            <div className={` row ${cx("controlAdmin")} d-flex justify-content-between`}>
                <div className="col m-auto p-0 p-0">
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
                <div className="col m-auto p-0">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")}>
                            <FontAwesomeIcon size="xl" icon={faUser} />

                        </div>
                        <div className={cx("contentNofitication")}>
                            {data?.length}
                            <div>Người dùng</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto p-0">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" />

                        </div>
                        <div className={cx("contentNofitication")}>

                            <div>Danh sách đăng ký</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto p-0">
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

                    <Table
                        rowKey="MSSV"
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            defaultPageSize: 5,
                            showSizeChanger: true,
                            pageSizeOptions: ['5', '10', '15']
                        }}
                        onChange={handleTableChange}

                    />
                    {/* <Table striped bordered hover>
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
                    </Table> */}
                </div>
            </div>
        </div>
    );
}

export default Admin;