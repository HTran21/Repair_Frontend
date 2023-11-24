import classNames from "classnames/bind";
import styles from "./Info.module.scss";

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
                    <h1 className={cx("title")}>Thông tin cá nhân</h1>
                </div>
                <div className={cx("contentInfo")}>

                    <section className="h-100 gradient-custom-2">
                        <div className=" h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="">
                                    <div className="card">
                                        <div className={`rounded-top text-white d-flex flex-row ${cx("bgProfile")}`}>
                                            <div
                                                className={` d-flex flex-column ${cx("imgProfile")}`}
                                            >
                                                {avatar && <img

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
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Info;