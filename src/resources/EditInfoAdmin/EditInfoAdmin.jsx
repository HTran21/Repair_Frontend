import classNames from "classnames/bind";
import styles from "./EditInfoAdmin.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const cx = classNames.bind(styles);

function EditInfoAdmin() {

    const id = localStorage.getItem("ID_User");
    const [MaNV, setMaNV] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [hoten, setHoten] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [chucvu, setChucvu] = useState('');
    const [data, setData] = useState('');

    const [imageUpload, setImageUpload] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/user/staff/' + id)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));

    }, [])

    useEffect(() => {
        const getData = () => {
            setMaNV(data?.MaNV)
            setAvatar(data?.avatar)
            setEmail(data?.email)
            setHoten(data?.hoten)
            setPhone(data?.phone)
            setRole(data?.role)
            setChucvu(data?.chucvu)
            setImageUpload(`http://localhost:3000/${data?.avatar}`)
        }

        getData();
    }, [data])

    const upload = () => {
        const formData = new FormData()
        formData.append('avatar', avatar)
        formData.append('MaNV', MaNV)
        formData.append('hoten', hoten)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('chucvu', chucvu)
        formData.append('role', role)
        axios.put('http://localhost:3000/user/' + id, formData)
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error);
                } else {
                    toast.success(res.data.message);
                }
            })
            .catch(er => console.log(er))
    }

    return (
        <div className="container">
            <div className={cx("contentPage")}>
                <div className={cx("titlePage")}>
                    <h1 className="text-dark">Chỉnh sửa thông tin</h1>
                </div>
                <section className={cx("contentEditInfo")}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        {avatar && <img
                                            src={imageUpload}
                                            alt="avatar"
                                            className="img-fluid rounded-circle"
                                            style={{ width: 150 }}
                                        />}
                                        <h2 className="my-3">{hoten}</h2>
                                        <p className="text-muted mb-2">{role == 'SV' ? 'Sinh viên' : 'Admin'}</p>

                                        <label htmlFor="avatar" className={cx("btnImage")}>
                                            <FontAwesomeIcon icon={faImage} /> Change
                                        </label>
                                        <input className={cx("inputForm")} type="file" name="avatar" id="avatar"
                                            defaultValue={avatar || ""} onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    setImageUpload(URL.createObjectURL(e.target.files[0]));

                                                }
                                                setAvatar(e.target.files[0])
                                            }} />

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">MSSV</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className={cx("inputInfo")} type="text" name="MSSV" id="" spellCheck="false"
                                                    defaultValue={MaNV || ""} onChange={e => {
                                                        setMaNV(e.target.value)
                                                    }} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className={cx("inputInfo")} type="text" name="hoten" id=""
                                                    defaultValue={hoten || ""} onChange={e => setHoten(e.target.value)} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className={cx("inputInfo")} type="text" name="email" id=""
                                                    defaultValue={email || ""} onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className={cx("inputInfo")} type="text" name="phone" id=""
                                                    defaultValue={phone || ""} onChange={e => setPhone(e.target.value)} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Chức vụ</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <select name="chucvu" style={{ border: "none", backgroundColor: "#F0F0F0", borderRadius: "5px" }}
                                                    value={chucvu} onChange={e => setChucvu(e.target.value)}
                                                >
                                                    <option value="">Chọn chức vụ</option>
                                                    <option value="Quản lý">Quản lý</option>
                                                    <option value="Thợ sửa chữa">Thợ sửa chữa</option>

                                                </select>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Role</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <select name="role" style={{ border: "none", backgroundColor: "#F0F0F0", borderRadius: "5px" }}
                                                    value={role} onChange={e => setRole(e.target.value)}
                                                >
                                                    <option value="">Chọn role</option>
                                                    <option value="AD">AD</option>
                                                    <option value="ST">ST</option>

                                                </select>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to={"/infoadmin"}> <button className={cx("btnClose")} >Đóng</button></Link>
                                    <button onClick={upload} className={cx("btnSave")}>Lưu thay đổi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

            </div >
        </div >

    );
}

export default EditInfoAdmin;