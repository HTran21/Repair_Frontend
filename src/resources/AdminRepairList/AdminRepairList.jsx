import classNames from "classnames/bind";
import styles from "./AdminRepairList.module.scss";
import { useState, useEffect } from "react";
import { Table, Tag, Tabs } from "antd";
import axios from 'axios';
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck, faInfo } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const cx = classNames.bind(styles);
const { TabPane } = Tabs;

function AdminRepairList() {

    const [activeTab, setActiveTab] = useState('1'); // Mặc định hiển thị tab 1

    const handleTabChange = (key) => {
        setActiveTab(key);
    }

    const [dataUnapproved, setDataUnapproved] = useState();

    const columns = [
        {
            title: 'STT',
            dataIndex: 'ID_Repair',
            key: 'id',
            sorter: (a, b) => a.ID_User - b.ID_User,
            render: (text, object, index) => { return index + 1 },
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
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (record) => {
                if (record.TrangThai === 'N') {
                    return (
                        <>
                            <button className={cx("iconDenied")}><FontAwesomeIcon icon={faX} /></button>
                            <Link><button className={cx("iconSuccess")}><FontAwesomeIcon icon={faCheck} /></button></Link>
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <Link><button className={cx("iconSuccess")}><FontAwesomeIcon icon={faInfo} /></button></Link>
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

    useEffect(() => {
        fetchDataUnapproved();
    }, [])

    console.log(dataUnapproved)

    const dataChuaDuyet = [
        {
            "ID_Repair": 1,
            "MSSV": "B2014798",
            "nameItem": "Bồn cầu",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
        {
            "ID_Repair": 2,
            "MSSV": "B2014798",
            "nameItem": "Chậu rửa mặt",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
        {
            "ID_Repair": 3,
            "MSSV": "B2014798",
            "nameItem": "Đèn",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
        {
            "ID_Repair": 4,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
        {
            "ID_Repair": 5,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
        {
            "ID_Repair": 6,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
        {
            "ID_Repair": 7,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "N"
        },
    ]

    const dataDaDuyet = [
        {
            "ID_Repair": 1,
            "MSSV": "B2014798",
            "nameItem": "Bồn cầu",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
        {
            "ID_Repair": 2,
            "MSSV": "B2014798",
            "nameItem": "Chậu rửa mặt",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
        {
            "ID_Repair": 3,
            "MSSV": "B2014798",
            "nameItem": "Đèn",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
        {
            "ID_Repair": 4,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
        {
            "ID_Repair": 5,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
        {
            "ID_Repair": 6,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
        {
            "ID_Repair": 7,
            "MSSV": "B2014798",
            "nameItem": "Tủ",
            "NgayDK": "01/11/2023",
            "TrangThai": "Y"
        },
    ]

    const [pagination, setPagination] = useState({});

    function handleTableChange() {

        requestToServer().then((data) => {
            pagination.total = your_value;
            setPagination(pagination);
        })
    }
    return (
        <div className="container min-vh-100">
            <div className={`${cx("titlePage")} mt-4`}>
                <h1 className={cx("title")}>Repair List</h1>
            </div>
            <div className={cx("contentPage")}>
                {/* <Table
                    rowKey="ID_Repair"
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '15']
                    }}
                    onChange={handleTableChange}
                /> */}
                <Tabs activeKey={activeTab} onChange={handleTabChange} >
                    <TabPane tab="Sửa chữa chưa duyệt" key="1"  >
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
                    <TabPane tab="Sửa chữa đã duyệt" key="2">
                        <Table
                            rowKey="ID_Repair"
                            columns={columns}
                            dataSource={dataDaDuyet}
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
    );
}

export default AdminRepairList;