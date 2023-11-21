import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faScrewdriverWrench, faMagnifyingGlass, faTrash, faPenToSquare, faCircleInfo, faUserPlus, faIdCard, faLock, faPhone, faEnvelope, faImage, faUserShield, faUserTie, faEye, faEyeSlash, faUserGear } from '@fortawesome/free-solid-svg-icons';

import { Table, Tag, Tabs, Button, Modal, ConfigProvider } from "antd";
import axios from "axios";
import toast from 'react-hot-toast';


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
                        <button className={cx("iconTable")} onClick={() => showModalDeleteUser(record)}><FontAwesomeIcon icon={faTrash} /></button>
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
                    color = 'blue';
                } else {
                    color = 'orange';
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
                        <button className={cx("iconTable")} onClick={() => showModalDelete(record)}><FontAwesomeIcon icon={faTrash} /></button>
                    </>
                )
            }
        },

    ];

    const [data, setData] = useState();
    const [staff, setStaff] = useState();

    const [dashBoard, setDashBoard] = useState();

    const fetchDashBoard = () => {
        axios.get('http://localhost:3000/user/dashboard')
            .then(res => {
                setDashBoard(res.data);

            })
            .catch(err => console.log(err));
    }

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
        fetchDashBoard();

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
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    const handleCancel = () => {
        setIsModalOpen(false);
        setMaNV('');
        setUsername('');
        setMaNV('');
        setPassword('');
        setChucvu('');
        setEmail('');
        setPhone('');
        setAvatar(null);
        setRole('');
        setErrors('')
    };

    const [avatar, setAvatar] = useState();
    const [MaNV, setMaNV] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [chucvu, setChucvu] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleOk = () => {
        const newErrors = {};

        if (MaNV.trim() === '') {
            newErrors.MaNV = 'MaNV is required';
        }

        if (username.trim() === '') {
            newErrors.username = 'Username is required';
        }

        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }

        if (email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!avatar) {
            newErrors.avatar = 'Image is required';
        }

        if (chucvu === '') {
            newErrors.chucvu = 'Please select an option';
        }

        if (role === '') {
            newErrors.role = 'Please select an option';
        }

        if (phone === '') {
            newErrors.phone = 'Phone is required';
        } else if (phone.length < 10) {
            newErrors.phone = 'Invalid phone number';
        }

        if (Object.keys(newErrors).length === 0) {
            const formData = new FormData()
            formData.append('avatar', avatar)
            formData.append('MaNV', MaNV)
            formData.append('username', username)
            formData.append('password', password)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('chucvu', chucvu)
            formData.append('role', role)
            axios.post('http://localhost:3000/authentication/addStaff', formData)
                .then(res => {
                    if (res.data.error) {
                        toast.error(res.data.error)
                    }
                    else {
                        toast.success(res.data.message)
                        handleCancel();
                        setErrors({});
                        fetchStaff();


                    }

                })
                .catch(err => console.log(err));
        }
        else {
            setErrors(newErrors);
        }

    }

    // Delete Staff
    const [isModalStaff, setIsModalStaff] = useState(false);
    const [dataStaff, setDataStaff] = useState();
    const showModalDelete = (record) => {
        setIsModalStaff(true);
        setDataStaff(record)
    };
    const handleCancelDelete = () => {
        setIsModalStaff(false);
    }

    const handleOkDelete = (id) => {
        if (id) {
            axios.delete('http://localhost:3000/user/' + id)
                .then(res => {
                    toast.success(res.data.message);
                    setIsModalStaff(false);
                    fetchStaff();
                })
                .catch(err => console.log(err));
        }
    }

    // Delete User
    const [isModalUser, setIsModalUser] = useState(false);
    const [dataUser, setDataUser] = useState();
    const showModalDeleteUser = (record) => {
        setIsModalUser(true);
        setDataUser(record)
    };
    const handleCancelDeleteUser = () => {
        setIsModalUser(false);
    }

    const handleOkDeleteUser = (id) => {
        if (id) {
            axios.delete('http://localhost:3000/user/user/' + id)
                .then(res => {
                    toast.success(res.data.message);
                    setIsModalUser(false);
                    fetchData();
                })
                .catch(err => console.log(err));
        }
    }








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
                            {dashBoard?.totalUsers
                            }
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
                            {dashBoard?.totalRepairs
                            }
                            <div>Đăng ký</div>
                        </div>
                    </div>
                </div>
                <div className="col m-auto p-0">
                    <div className={cx("nofitication")}>
                        <div className={cx("iconNofitication")} style={{
                            color: " #ffffff", backgroundColor: " #37d8d3c9"
                        }}>
                            <FontAwesomeIcon icon={faUserGear} size="xl" />

                        </div>
                        <div className={cx("contentNofitication")}>
                            {dashBoard?.totalStaffs}
                            <div>Nhân viên</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${cx("listUser")}`}>
                <div className="d-flex">
                    <p className={cx("titleUser")}>Danh sách người dùng hệ thống</p>
                    <div className="ms-auto d-flex align-items-center">
                        <ConfigProvider
                            theme={{
                                token: {
                                    // Seed Token
                                    colorPrimary: '#DDF2FD',
                                    borderRadius: 2,

                                },
                            }}
                        >
                            <Button className={cx("btnAddStaff")} onClick={showModal}>Thêm nhân viên</Button>
                        </ConfigProvider>
                    </div>

                </div>
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
                                rowKey="MaNV"
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
                <form action="" encType='multipart/form-data'>
                    <div className="row">
                        <div className="col">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faIdCard} /></span>
                                <input className={cx("inputGroup")} type="text" required name="MaNV" id="" placeholder="Mã nhân viên"
                                    value={MaNV} onChange={(e) => setMaNV(e.target.value)} />
                            </div>
                            {errors.MaNV && <p className={cx("error")}>{errors.MaNV}</p>}
                        </div>
                        <div className="col">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faUser} /></span>
                                <input className={cx("inputGroup")} type="text" name="username" placeholder="Họ tên"
                                    value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            {errors.username && <p className={cx("error")}>{errors.username}</p>}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className={cx("group2")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faLock} /></span>
                                <input className={cx("inputGroup")} type={showPassword ? 'text' : 'password'} name="password"
                                    value={password} onChange={e => setPassword(e.target.value)} placeholder="Mật khẩu" />
                                <span onClick={togglePasswordVisibility} className={cx("iconGroup")}>
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                </span>
                            </div>
                            {errors.password && <p className={cx("error")}>{errors.password}</p>}

                        </div>
                        <div className="col-6">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faUserTie} /></span>
                                <select className={cx("selectGroup")} name="chucvu" value={chucvu} onChange={e => setChucvu(e.target.value)}>
                                    <option key={1} value="">Chọn chức vụ</option>
                                    <option key={2} value="Quản lý">Quản lý</option>
                                    <option key={3} value="Thợ sửa chữa">Thợ sửa chữa</option>
                                </select>
                            </div>
                            {errors.chucvu && <p className={cx("error")}>{errors.chucvu}</p>}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faEnvelope} /></span>
                                <input className={cx("inputGroup")} type="text" name="email" placeholder="Email"
                                    value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            {errors.email && <p className={cx("error")}>{errors.email}</p>}

                        </div>
                        <div className="col">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faPhone} /></span>
                                <input className={cx("inputGroup")} type="text" name="phone" placeholder="Số điện thoại"
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            {errors.phone && <p className={cx("error")}>{errors.phone}</p>}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faImage} /></span>
                                <input className={cx("inputGroup")} type="file" name="avatar"
                                    accept="image/jpeg, image/png, image/jpg" onChange={e => setAvatar(e.target.files[0])} />
                            </div>
                            {errors.avatar && <p className={cx("error")}>{errors.avatar}</p>}

                        </div>
                        <div className="col">
                            <div className={cx("group")}>
                                <span className={cx("iconGroup")}><FontAwesomeIcon icon={faUserShield} /></span>
                                <select className={cx("selectGroup")} name="role" value={role} onChange={e => setRole(e.target.value)}>
                                    <option value="">Chọn vai trò</option>
                                    <option value="AD">AD</option>
                                    <option value="ST">ST</option>
                                </select>
                            </div>
                            {errors.role && <p className={cx("error")}>{errors.role}</p>}
                        </div>
                    </div>
                </form>

            </Modal>


            <Modal title="Xóa tài khoản nhân viên" open={isModalStaff} onOk={() => handleOkDelete(dataStaff?.ID_Staff)} okText={"Xóa"} cancelText={"Đóng"} onCancel={handleCancelDelete} okButtonProps={{ style: { background: 'red' } }}  >
                Bạn có chắc chắn muốn xóa tài khoản này
            </Modal>


            <Modal title="Xóa tài khoản sinh viên" open={isModalUser} onOk={() => handleOkDeleteUser(dataUser?.ID_User)} okText={"Xóa"} cancelText={"Đóng"} onCancel={handleCancelDeleteUser} okButtonProps={{ style: { background: 'red' } }}  >
                Bạn có chắc chắn muốn xóa tài khoản này
            </Modal>

        </div >
    );
}

export default Admin;