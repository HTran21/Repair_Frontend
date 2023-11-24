import classNames from "classnames/bind";
import styles from "./ContactUser.module.scss";

import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';


const cx = classNames.bind(styles);

function ContactUser
    () {

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
        }
    ]

    const [listContact, setListContact] = useState();
    const ID_User = localStorage.getItem("ID_User");
    const fetchListReapair = () => {
        axios.get("http://localhost:3000/contact/user/" + ID_User)
            .then(res => {
                setListContact(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchListReapair();
    }, [])


    return (
        <div className="container min-vh-100">
            <div className={`${cx("titlePage")} mt-4`}>
                <h1 className={cx("title")}>Contact</h1>
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
        </div>

    );
}

export default ContactUser
    ;