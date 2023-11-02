import className from 'classnames/bind';
import styles from './RepairList.module.scss';
import { useState, useEffect } from "react";

import { Table, Tag } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faScrewdriverWrench, faMagnifyingGlass, faTrash, faPenToSquare, faCircleInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const cx = className.bind(styles)

function RepairList() {
    const [show2, setShow2] = useState(false);
    const [recordView2, setRecordView2] = useState(null);

    const handleView2 = (data) => {
        setShow2(true)
        setRecordView2(data)
    }

    const handleClose2 = () => setShow2(false);


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
                return (
                    <>
                        <Link to={`/repairupdate/${record.ID_Repair}`}> <button className={cx("iconTable")}><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
                        <button className={cx("iconTable")}><FontAwesomeIcon onClick={() => handleView2(record)} icon={faTrash} /></button>

                    </>
                )
            }
        },

    ];

    const [data, setData] = useState([]);

    const fetchData = () => {
        const ID_User = localStorage.getItem("ID_User")
        fetch('http://localhost:3000/repair/' + ID_User) // Thay thế URL_BACKEND_API bằng URL thực tế của API
            .then(response => response.json())
            .then(data => {
                setData(data); // Lưu dữ liệu vào state
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Lỗi:', error));
    }

    useEffect(() => {
        // Gửi yêu cầu GET đến backend API và lấy dữ liệu
        fetchData();
    }, []);

    const handleDelete = (id) => {
        if (id) {
            axios.delete('http://localhost:3000/repair/delete', { data: { id: id } })
                .then(res => {
                    toast.success(res.data.message);
                    handleClose2(true);
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
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title ><h2 className='text-dark m-0'>Xóa đăng ký sửa chữa</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className={cx("bodyModal")}>
                    <p>Bạn có chắc muốn xóa đơn đăng ký sửa chữa này?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button size='lg' style={{ fontSize: "16px" }} className={cx("btnClose")} variant="secondary" onClick={handleClose2}>Đóng</Button>
                    <Button size='lg' style={{ fontSize: "16px" }} className={cx("btnClose")} variant="danger" onClick={() => handleDelete(recordView2.ID_Repair)}>Xóa đăng ký</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RepairList;