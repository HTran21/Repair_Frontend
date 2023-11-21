import className from 'classnames/bind';
import styles from './RepairList.module.scss';
import { useState, useEffect } from "react";

import { Table, Tag, Modal } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faScrewdriverWrench, faMagnifyingGlass, faTrash, faPenToSquare, faCircleInfo, faUserPlus, faInfo } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import toast from "react-hot-toast";

import { Link } from "react-router-dom";


const cx = className.bind(styles)

function RepairList() {
    const [repair, setRepair] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (record) => {
        setIsModalOpen(true);
        setRepair(record);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'ID_Repair',
            key: 'id',
            sorter: (a, b) => a.ID_Repair - b.ID_Repair,
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
            title: 'Thiết bị',
            dataIndex: 'nameItem',
            key: 'nameItem',
            // sorter: (a, b) => a.hoten.length - b.hoten.length,
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
            title: 'Trạng thái',
            dataIndex: 'TrangThai',
            key: 'TrangThai',
            render: (TrangThai) => {
                let color;
                let text;
                if (TrangThai === 'N') {
                    color = 'red';
                    text = 'Chưa duyệt'

                } else {
                    color = 'green';
                    text = 'Đã duyệt'
                }
                return (
                    <Tag color={color} key={TrangThai}>
                        {text}
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
                if (record.TrangThai === 'N') {
                    return (
                        <>
                            <Link to={`/repairupdate/${record.ID_Repair}`}> <button className={cx("iconTable")}><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
                            <button className={cx("iconTable")}><FontAwesomeIcon onClick={() => showModal(record)} icon={faTrash} /></button>

                        </>
                    )
                }
                else {
                    return (
                        <>

                            <Link to={`/repairinfo/${record.ID_Repair}`}><button className={cx("iconTable")}><FontAwesomeIcon icon={faInfo} /></button></Link>

                        </>
                    )
                }

            }
        },

    ];

    const [data, setData] = useState([]);

    const fetchData = () => {
        const ID_User = localStorage.getItem("ID_User")
        fetch('http://localhost:3000/repair/' + ID_User)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setTotalPages(data.totalPages);
                console.log("Data", data);
            })
            .catch(error => console.error('Lỗi:', error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleOk = (id) => {

        if (id) {
            axios.delete('http://localhost:3000/repair/delete', { data: { id: id } })
                .then(res => {
                    toast.success(res.data.message);
                    setIsModalOpen(false);
                    fetchData();
                })
                .catch(err => console.log(err));
        }
    }

    const [totalPages, setTotalPages] = useState(1);


    const [pagination, setPagination] = useState({});

    function handleTableChange() {

        requestToServer().then((data) => {
            pagination.total = your_value;
            setPagination(pagination);
        })
    }

    return (
        <div className='container'>
            <div className={cx("contentPage")}>
                <div className={cx("titlePage")}>
                    <h1 className='text-dark'>Repair List</h1>
                </div>
                <div className={cx("contentRepairList")}>
                    <Table
                        rowKey="ID_Repair"
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            defaultPageSize: 5,
                            showSizeChanger: true,
                            pageSizeOptions: ['5', '10', '15']
                        }}
                        onChange={handleTableChange}
                    />
                </div>
            </div>
            <Modal title="Xóa đăng ký" open={isModalOpen} onOk={() => handleOk(repair?.ID_Repair)} okText={"Xóa"} cancelText={"Đóng"} onCancel={handleCancel} okButtonProps={{ style: { background: 'red' } }}  >
                Bạn có chắc chắn muốn xóa đăng ký
            </Modal>
        </div>
    );
}

export default RepairList;