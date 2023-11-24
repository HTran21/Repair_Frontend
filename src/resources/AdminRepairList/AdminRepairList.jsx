import classNames from "classnames/bind";
import styles from "./AdminRepairList.module.scss";
import { useState, useEffect } from "react";
import { Table, Tabs, Modal } from "antd";
import axios from 'axios';
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck, faInfo } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const { TabPane } = Tabs;

function AdminRepairList() {

    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key) => {
        setActiveTab(key);
    }

    const [dataUnapproved, setDataUnapproved] = useState();
    const [dataAccept, setDataAccept] = useState();

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID_Repair',
            key: 'id',
            sorter: (a, b) => a.ID_User - b.ID_User,
            // render: (text, object, index) => { return index + 1 },
            align: 'center',
        },
        {
            title: 'MSSV',
            dataIndex: 'MSSV',
            key: 'MSSV',
            sorter: (a, b) => a.MSSV - b.MSSV,
            align: 'center',
        },
        {
            title: 'Thiết bị',
            dataIndex: 'nameItem',
            key: 'nameItem',
            sorter: (a, b) => a.nameItem - b.nameItem,
            align: 'center',
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'NgayDK',
            key: 'NgayDK',
            sorter: (a, b) => {
                // Convert the dates to JavaScript Date objects for comparison
                const dateA = new Date(a.NgayDK);
                const dateB = new Date(b.NgayDK);

                // Compare the dates
                return dateA - dateB;
            },
            render: (NgayDK) => {
                const date = new Date(NgayDK);
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                return formattedDate

            },
            align: 'center',
        },
        {
            title: 'Ngày hẹn',
            dataIndex: 'NgayDuyet',
            key: 'NgayDuyet',
            defaultSortOrder: 'descend',
            sorter: (a, b) => {
                // Convert the dates to JavaScript Date objects for comparison
                const dateA = new Date(a.NgayDuyet);
                const dateB = new Date(b.NgayDuyet);

                // Compare the dates
                return dateA - dateB;
            },
            render: (NgayDuyet) => {
                if (NgayDuyet === '0000-00-00') {
                    return <>
                        <p className='m-0'>Chưa duyệt</p>
                    </>
                }
                const date = new Date(NgayDuyet);
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                return formattedDate

            },
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (record) => {
                if (record.TrangThai === 'N') {
                    return (
                        <>
                            <Link to={`/approve/${record.ID_Repair}`}><button className={cx("iconSuccess")}><FontAwesomeIcon icon={faCheck} /></button></Link>

                            <button className={cx("iconDenied")}><FontAwesomeIcon icon={faX} onClick={() => showModal(record)} /></button>
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <Link to={`/repairinfo/${record.ID_Repair}`}><button className={cx("iconSuccess")}><FontAwesomeIcon icon={faInfo} /></button></Link>
                        </>
                    )
                }

            }
        },
    ]

    const fetchDataUnapproved = () => {
        axios.get('http://localhost:3000/repair/unapproved') // Thay thế URL_BACKEND_API bằng URL thực tế của API
            .then(res => {
                setDataUnapproved(res.data); // Lưu dữ liệu vào state
                // setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Lỗi:', error));
    }

    const fetchDataAccept = () => {
        axios.get('http://localhost:3000/repair/accept') // Thay thế URL_BACKEND_API bằng URL thực tế của API
            .then(res => {
                setDataAccept(res.data); // Lưu dữ liệu vào state
                // setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Lỗi:', error));
    }

    useEffect(() => {
        fetchDataUnapproved();
        fetchDataAccept();
    }, [])


    const [pagination, setPagination] = useState({});

    function handleTableChange() {

        requestToServer().then((data) => {
            pagination.total = your_value;
            setPagination(pagination);
        })
    }

    // Modal
    const [repair, setRepair] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (record) => {
        setIsModalOpen(true);
        setRepair(record);
        console.log("ID repair", record.ID_Repair)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOk = (id) => {
        if (id) {
            axios.delete('http://localhost:3000/repair/delete', { data: { id: id } })
                .then(res => {
                    toast.success(res.data.message);
                    setIsModalOpen(false);
                    fetchDataUnapproved();
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="container min-vh-100">
            <div className={`${cx("titlePage")} mt-4`}>
                <h1 className={cx("title")}>Danh sách sửa chữa</h1>
            </div>
            <div className={cx("contentPage")}>
                <Tabs activeKey={activeTab} onChange={handleTabChange} >
                    <TabPane tab="Sửa chữa chưa duyệt" key="1" >
                        <Table
                            rowKey="ID_Repair"
                            columns={columns}
                            dataSource={dataUnapproved}
                            pagination={{
                                defaultPageSize: 5,
                                showSizeChanger: true,
                                pageSizeOptions: ['5', '10', '15']
                            }}
                            onChange={handleTableChange}
                        />
                    </TabPane>
                    <TabPane tab="Sửa chữa đã duyệt" key="2" >
                        <Table
                            rowKey="ID_Repair"
                            columns={columns}
                            dataSource={dataAccept}
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

            <Modal title="Xóa đăng ký" open={isModalOpen} onOk={() => handleOk(repair?.ID_Repair)} okText={"Xóa"} cancelText={"Đóng"} onCancel={handleCancel} okButtonProps={{ style: { background: 'red' } }}  >
                Bạn có chắc chắn muốn xóa đăng ký
            </Modal>
        </div>
    );
}

export default AdminRepairList;