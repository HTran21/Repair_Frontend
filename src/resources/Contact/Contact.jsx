import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Table } from "antd";
import toast from 'react-hot-toast';

const cx = classNames.bind(styles)

function Contact() {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        }
        return (
            <p className='text-light'>
                {isReadMore ? text.slice(0, 150) : text}
                <button onClick={toggleReadMore} className={`${cx("btnHomeRepair")}`}>{isReadMore ? "Đọc Thêm" : "Thu nhỏ"}</button>

            </p>
        )
    }

    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === 'true');

    const columns = [
        {
            title: 'Action',
            dataIndex: '',
            key: '',
            render: (record) => {
                return (
                    <>
                        <input value={record.ID_Repair} onChange={e => setIdRepair(e.target.value)} type="radio" name='id_repair' />
                    </>
                )
            },
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'nameItem',
            key: 'nameItem',
        },
        {
            title: 'Nhân viên sửa chữa',
            dataIndex: 'HoTen',
            key: 'HoTen',
        },

        {
            title: 'Ngày sửa',
            dataIndex: 'NgayDuyet',
            key: 'NgayDuyet',
            render: (NgayDuyet) => {

                const date = new Date(NgayDuyet);
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                return formattedDate

            },
            align: 'center',

        }];

    const [repair, setRepair] = useState([]);
    const [info, setInfo] = useState();
    const ID_User = localStorage.getItem("ID_User");
    const fetchRepair = () => {
        axios.get("http://localhost:3000/contact/" + ID_User)
            .then(res => {
                // console.log(res.data)
                setRepair(res.data);
            })
            .catch(error => console.error('Lỗi:', error));
    }
    const fetchInfo = () => {
        axios.get("http://localhost:3000/user/" + ID_User)
            .then(res => {
                // console.log(res.data)
                setInfo(res.data);
            })
            .catch(error => console.error('Lỗi:', error));
    }
    useEffect(() => {
        fetchRepair();
        fetchInfo();
    }, [])

    const [IdRepair, setIdRepair] = useState('');
    const [contact, setContact] = useState('');
    const currentDate = new Date();
    const date = currentDate.toISOString().slice(0, 10);

    const handleContact = (e) => {
        e.preventDefault();

        if (IdRepair.trim() === '' || contact.trim() === '') {
            toast.error("Vui lòng nhập đầy đủ thông tin")
        } else {
            axios.post("http://localhost:3000/contact/" + ID_User, { IdRepair, contact, date })
                .then(res => {
                    if (res.data.error) {
                        toast.error(res.data.error);
                    }
                    else {
                        setContact('');
                        toast.success(res.data.message);

                    }
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <div className="container">
            <div className={`row d-flex justify-content-center align-items-center h-100 ${cx("homePage")}`}>
                <div className={`col-md-5 col-lg-5 ${cx("contentHomePage")}`}>
                    <h1 className={cx("titleIntro")}>Liên hệ với chúng tôi</h1>
                    <ReadMore>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure ducimus nam impedit eum, voluptate inventore animi quas, nesciunt labore dolore ipsam modi tempore, assumenda voluptas quo vitae facere vel.
                    </ReadMore>

                    <div className={cx("listRepair")}>
                        <div className={cx("titleList")}>
                            Danh sách đã sửa chữa
                        </div>
                        <Table
                            rowKey="ID_Repair"
                            columns={columns}
                            dataSource={repair}
                            pagination={{
                                defaultPageSize: 2,
                                showSizeChanger: true,
                                pageSizeOptions: ['2']
                            }}
                        />
                    </div>

                </div>
                <div className="col-md-7 col-lg-7">
                    <div className={cx("contact")}>
                        <form className={cx("formContact")} action="">
                            <div className={cx("titleForm")}>

                                <h2 className={cx("title")}>CONTACT US</h2>
                                <p className={cx("desForm")}>Chúng tôi sẵn sàng nhận lời đánh giá từ bạn</p>
                            </div>
                            <div className="contentContact">
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} /></span>
                                    <input className={cx("inputForm")} name="username" autoComplete='off' placeholder='Username'
                                        defaultValue={info?.MSSV} disabled></input>

                                </div>
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm")} name="username" autoComplete='off' placeholder='Email'
                                        defaultValue={info?.email} disabled></input>

                                </div>

                                <textarea className={cx("textArea")} name="comment" id="" cols="30" rows="10" placeholder='Your text'
                                    value={contact} onChange={e => setContact(e.target.value)} spellCheck="false"></textarea>


                                <button className={cx("btnContact")} onClick={e => handleContact(e)}>Send Message</button>

                            </div>
                        </form>

                    </div>
                </div>
            </div >
        </div >
    );
}

export default Contact;