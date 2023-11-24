import classNames from "classnames/bind";
import styles from "./InfoAdmin.module.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faIdCard, faPhone, faTag, faUserLock } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const cx = classNames.bind(styles);

function InfoAdmin() {
    const id = localStorage.getItem("ID_User");
    const [data, setData] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/user/staff/' + id)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div className="container">
            <div className={cx("contentPage")}>
                <div className={cx("titlePage")}>
                    <h1 className="text-dark">PROFILE</h1>
                </div>
                <div className={cx("contentAdmin")}>

                    <section className="h-100 gradient-custom-2">
                        <div className=" h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className=" mt-4">
                                    <div className="card">
                                        <div className={`rounded-top text-white d-flex flex-row ${cx("bgProfile")}`}>
                                            <div
                                                className={` d-flex flex-column ${cx("imgProfile")}`}
                                            >
                                                {data?.avatar && <img
                                                    src={`http://localhost:3000/${data?.avatar}`}
                                                    alt="Generic placeholder image"
                                                    className="img-fluid img-thumbnail mt-4 mb-2 "
                                                    style={{ width: 150, zIndex: 1 }}
                                                />}
                                                <Link to={"/editadmin"} style={{ zIndex: 1, width: 150 }}>  <button
                                                    type="button"
                                                    className={cx("btnEdit")}
                                                    data-mdb-ripple-color="dark"
                                                >
                                                    Edit profile
                                                </button></Link>



                                            </div>
                                            <div className="" style={{ marginTop: 150, marginLeft: 10 }}>
                                                <h2>{data?.hoten}</h2>
                                            </div>
                                        </div>
                                        <div
                                            className="p-4 text-black"
                                            style={{ backgroundColor: "#f8f9fa" }}
                                        >
                                            <div className="d-flex justify-content-end text-center py-1">
                                                {data?.role == 'SV' ? 'Sinh viên' : 'Admin'}
                                            </div>
                                        </div>
                                        <div className="card-body text-black">
                                            <div className="mb-5">
                                                <h2 className="mb-1">Information</h2>
                                                <div className="" style={{ backgroundColor: "#f8f9fa" }}>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Mã nhân viên</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{data?.MaNV}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Họ tên</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{data?.hoten}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{data?.email}</p>
                                                            </div>
                                                        </div>
                                                        <hr />

                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Số điện thoại</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{data?.phone}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Chức vụ</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{data?.chucvu}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Role</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{data?.role}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default InfoAdmin;