import classNames from "classnames/bind";
import styles from "./Info.module.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faIdCard, faPhone, faTag, faUserLock } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const cx = classNames.bind(styles);

function Info() {
    const id = localStorage.getItem("ID_User");
    const [MSSV, setMSSV] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [hoten, setHoten] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [day, setDay] = useState('');
    const [phong, setPhong] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/user/' + id)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));

    }, [])

    useEffect(() => {
        const getData = () => {
            setMSSV(data?.MSSV),
                setAvatar(data?.avatar),
                setEmail(data?.email),
                setHoten(data?.hoten),
                setPhone(data?.phone),
                setRole(data?.role),
                setPhong(data?.TenPhong),
                setDay(data?.TenDay)
        }

        getData();
    }, [data])

    return (
        <div className="container">
            <div className={cx("contentPage")}>
                <div className={cx("titlePage")}>
                    <h1 className="text-dark">PROFILE</h1>
                </div>
                <div className={cx("contentInfo")}>
                    {/* <div className="row">
                        <div className="col-md-5 col-lg-4 col-sm-12">
                            <div className={cx("leftInfo")}>
                                <h2>AVATAR</h2>
                                <img className={cx("imageUser")} src="https://i.pinimg.com/564x/bb/93/99/bb93993d644835d9aa673c760cad0585.jpg" alt="" />
                                <h3 className="text-center">Sinh Viên</h3>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8 col-sm-12">
                            <div className={cx("rightInfo")}>
                                <h2>INFO USER</h2>
                                <div className={cx("infoUser")}>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faIdCard} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="B2014798" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faAddressCard} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="Trần Hoàng Trân" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faEnvelope} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="tran@gmail.com" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faPhone} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="097543158" disabled />
                                    </div>
                                    <div className={cx("group")}>
                                        <span><FontAwesomeIcon className={cx("iconInput")} icon={faUserLock} /></span>
                                        <input className={cx("inputGroup")} type="text" name="nameItem"
                                            id="" defaultValue="SV" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <section className="h-100 gradient-custom-2">
                        <div className=" h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-lg-8 col-sm-12 ">
                                    <div className="card">
                                        <div className={`rounded-top text-white d-flex flex-row ${cx("bgProfile")}`}>
                                            <div
                                                className={` d-flex flex-column ${cx("imgProfile")}`}
                                            >
                                                {avatar && <img
                                                    // src="https://i.pinimg.com/564x/d8/fe/7f/d8fe7f327435319dcc06217991ca4bb3.jpg"
                                                    src={`http://localhost:3000/${avatar}`}
                                                    alt="Generic placeholder image"
                                                    className="img-fluid img-thumbnail mt-4 mb-2 "
                                                    style={{ width: 150, zIndex: 1 }}
                                                />}
                                                <Link to={"/editinfo"} style={{ zIndex: 1, width: 150 }}>  <button
                                                    type="button"
                                                    className={cx("btnEdit")}
                                                    data-mdb-ripple-color="dark"
                                                >
                                                    Edit profile
                                                </button></Link>



                                            </div>
                                            <div className="" style={{ marginTop: 150, marginLeft: 10 }}>
                                                <h2>{hoten}</h2>
                                            </div>
                                        </div>
                                        <div
                                            className="p-4 text-black"
                                            style={{ backgroundColor: "#f8f9fa" }}
                                        >
                                            <div className="d-flex justify-content-end text-center py-1">
                                                {role == 'SV' ? 'Sinh viên' : 'Admin'}
                                            </div>
                                        </div>
                                        <div className="card-body text-black">
                                            <div className="mb-5">
                                                <h2 className="mb-1">Information</h2>
                                                <div className="" style={{ backgroundColor: "#f8f9fa" }}>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">MSSV</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{MSSV}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Họ tên</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{hoten}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{email}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Số điện thoại</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{phone}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Dãy</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{day}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Phòng</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{phong}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className={cx("dashboardUser")}>
                                        <h2>DASHBOARD</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Info;