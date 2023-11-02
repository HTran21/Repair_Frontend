import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faScrewdriverWrench, faMagnifyingGlass, faTrash, faPenToSquare, faCircleInfo, faUserPlus, faIdCard, faLock, faPhone, faEnvelope, faImage, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { Table, Tag, Tabs, Button, Modal } from "antd";
import axios from "axios";



const cx = classNames.bind(styles)
const { TabPane } = Tabs;


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

    const columnsStaff = [
        {
            title: 'STT',
            dataIndex: 'ID_Staff',
            key: 'ID_Staff',
            sorter: (a, b) => a.ID_Staff - b.ID_Staff,
            render: (text, object, index) => { return index + 1 },
            align: 'center',
        },
        {
            title: 'Mã nhân viên',
            dataIndex: 'MaNV',
            key: 'MaNV',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.MaNV.localeCompare(b.MaNV),
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
            title: 'Chức vụ',
            dataIndex: 'chucvu',
            key: 'chucvu',
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
    const [staff, setStaff] = useState();


    const fetchData = () => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
    }
    const fetchStaff = () => {
        fetch('http://localhost:3000/user/staff')
            .then(res => res.json())
            .then(data => {
                setStaff(data);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        fetchData();
        fetchStaff();

    }, [])

    const [pagination, setPagination] = useState({});

    function handleTableChange() {

        requestToServer().then((data) => {
            pagination.total = your_value;
            setPagination(pagination);
        })
    }

    const [activeTab, setActiveTab] = useState('1'); // Mặc định hiển thị tab 1

    const handleTabChange = (key) => {
        setActiveTab(key);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <div className={`${cx("adminPage")} container`}>
            <div className={` row ${cx("controlAdmin")} d-flex justify-content-between`}>
                <div className="col m-auto p-0 p-0">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")} style={{
                            color: "#007BFF",
                            backgroundColor: "#CAE5FD"
                        }}>
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
                        <div className={cx("iconNofitication")} style={{
                            color: "#01BBB0",
                            backgroundColor: " #D1F0F0"
                        }}>
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
                        <div className={cx("iconNofitication")} style={{
                            color: "#FFB21E",
                            backgroundColor: " #FFF0D2"
                        }}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" />

                        </div>
                        <div className={cx("contentNofitication")}>

                            <div>Danh sách đăng ký</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto p-0">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")} style={{
                            color: " #ffffff", backgroundColor: " #37d8d3c9"
                        }}>
                            <FontAwesomeIcon icon={faUserPlus} size="xl" />

                        </div>
                        <div className={cx("contentNofitication")}>

                            <div>Thêm người dùng</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${cx("listUser")}`}>
                <div className="d-flex">
                    <p className={cx("titleUser")}>Danh sách người dùng hệ thống</p>
                    <div className="ms-auto d-flex align-items-center">
                        <Button className={cx("btnAddStaff")} onClick={showModal}>Thêm nhân viên</Button>
                    </div>
                </div>


                {/* <div className={cx("search")}>
                    <span className={cx("inconSearch")}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7c7e83", }} /></span>
                    <input type="text" className={cx("inputSearch")} placeholder='Search...' />
                </div> */}
                <div className={`text-center ${cx("tableUser")}`}>
                    <Tabs activeKey={activeTab} onChange={handleTabChange} >
                        <TabPane tab="Danh sách sinh viên" key="1"  >
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
                        </TabPane>
                        <TabPane tab="Danh sách nhân viên" key="2">
                            <Table
                                rowKey="MSSV"
                                columns={columnsStaff}
                                dataSource={staff}
                                pagination={{
                                    defaultPageSize: 5,
                                    showSizeChanger: true,
                                    pageSizeOptions: ['5', '10', '15']
                                }}
                                onChange={handleTableChange}

                            />
                        </TabPane>
                    </Tabs>
                </div>
            </div>

            <Modal title="Thêm nhân viên" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="row">
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faIdCard} /></span>
                            <input className={cx("inputGroup")} type="text" required name="" id="" placeholder="Mã nhân viên" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faUser} /></span>
                            <input className={cx("inputGroup")} type="text" name="" id="" placeholder="Họ tên" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faLock} /></span>
                            <input className={cx("inputGroup")} type="text" name="" id="" placeholder="Mật khẩu" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faUserTie} /></span>
                            <select className={cx("selectGroup")} name="" id="">
                                <option value="">Chọn chức vụ</option>
                                <option value="">Quản lý</option>
                                <option value="">Thợ sửa chữa</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input className={cx("inputGroup")} type="text" name="" id="" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faPhone} /></span>
                            <input className={cx("inputGroup")} type="text" name="" id="" placeholder="Số điện thoại" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faImage} /></span>
                            <input className={cx("inputGroup")} type="file" name="" id="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("group")}>
                            <span className={cx("iconGroup")}><FontAwesomeIcon icon={faUserShield} /></span>
                            <select className={cx("selectGroup")} name="" id="">
                                <option value="">Chọn vai trò</option>
                                <option value="">AD</option>
                                <option value="">ST</option>
                                <option value="">SV</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Modal>

        </div >
    );
}

export default Admin;