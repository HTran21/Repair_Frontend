import classNames from "classnames/bind";
import styles from "./ContactAdmin.module.scss";

import { Table, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function ContactAdmin() {

    const columns = [
        {
            title: 'STT',
            dataIndex: 'ID_Contact',
            key: 'ID_Contact',
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
            title: 'Tên thiết bị',
            dataIndex: 'nameItem',
            key: 'nameItem',
            sorter: (a, b) => a.nameItem - b.nameItem,
            align: 'center',
        },
        {
            title: 'ID Repair',
            dataIndex: 'ID_Repair',
            key: 'ID_Repair',
            align: 'center',
        },
        {
            title: 'Thợ sửa chữa',
            dataIndex: 'hoten',
            key: 'hoten',
            sorter: (a, b) => a.hoten - b.hoten,
            align: 'center',
        },

        {
            title: 'Ngày liên hệ',
            dataIndex: 'ngayContact',
            key: 'ngayContact',
            defaultSortOrder: 'descend',
            render: (ngayContact) => {
                const date = new Date(ngayContact);
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                return formattedDate

            },
            align: 'center',
        },
        {
            title: 'Nội dung',
            dataIndex: 'comment',
            key: 'commet',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (record) => {
                return (
                    <>
                        <span className={cx("iconDenied")}><FontAwesomeIcon icon={faTrash} onClick={() => showModal(record)} /></span>
                        {record.TrangThai === "Y" && (
                            <Link to={`/repairinfo/${record.ID_Repair}`} className="text-decoration-none"> <span className={cx("iconNext")}><FontAwesomeIcon icon={faChevronRight} /></span></Link>
                        )}
                    </>

                )
            }
        },
    ]

    const [listContact, setListContact] = useState();
    const fetchListReapair = () => {
        axios.get("http://localhost:3000/contact")
            .then(res => {
                setListContact(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchListReapair();
    }, [])

    const [IdContact, setIdContact] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (record) => {
        setIsModalOpen(true);
        setIdContact(record.ID_Contact)
    };
    const handleOk = () => {
        axios.delete("http://localhost:3000/contact/" + IdContact)
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error);
                }
                else {
                    handleCancel();
                    toast.success(res.data.message);
                    fetchListReapair();
                }
            })
            .catch((err) => console.log(err));

    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }



    return (
        <div className="container min-vh-100">
            <div className={`${cx("titlePage")} mt-4`}>
                <h1 className={cx("title")}>Contact List</h1>
            </div>
            <div className={cx("contentPage")}>
                <div className={cx("list")}>
                    <Table
                        rowKey="ID_Contact"
                        columns={columns}
                        dataSource={listContact}
                        pagination={{
                            defaultPageSize: 5,
                            showSizeChanger: true,
                            pageSizeOptions: ['5', '10', '15']
                        }}

                    />
                </div>
            </div>
            <Modal title="Xóa liên hệ" open={isModalOpen} onOk={handleOk} okText={"Xóa"} cancelText={"Đóng"} onCancel={handleCancel} okButtonProps={{ style: { background: 'red' } }}  >
                Bạn có chắc chắn muốn liên hệ này
            </Modal>
        </div>

    );
}

export default ContactAdmin;