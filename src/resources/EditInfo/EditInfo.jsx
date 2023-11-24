import classNames from "classnames/bind";
import styles from "./EditInfo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const cx = classNames.bind(styles);

function EditInfo() {

    const id = localStorage.getItem("ID_User");
    const [MSSV, setMSSV] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [hoten, setHoten] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [data, setData] = useState('');
    // const [file, setFile] = useState()
    const [day, setDay] = useState('');
    const [phong, setPhong] = useState('');

    const [dsDay, setDsday] = useState();
    const [dsPhong, setDsPhong] = useState();

    const [imageUpload, setImageUpload] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/user/day')
            .then(res => {
                setDsday(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (day !== '') {
            const id = day;
            axios.get('http://localhost:3000/user/day/' + id)
                .then(res => {
                    setDsPhong(res.data)
                })
                .catch(err => console.log(err));
        } else {
            setDsPhong()
        }
    }, [day])

    useEffect(() => {
        axios.get('http://localhost:3000/user/' + id)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));

    }, [])

    useEffect(() => {
        const getData = () => {
            setMSSV(data?.MSSV)
            setAvatar(data?.avatar)
            setEmail(data?.email)
            setHoten(data?.hoten)
            setPhone(data?.phone)
            setDay(data?.ID_Day)
            setPhong(data?.ID_Phong)
            setRole(data?.role)
            setImageUpload(`http://localhost:3000/${data?.avatar}`)
        }

        getData();
    }, [data])

    const upload = () => {
        const formData = new FormData()
        formData.append('avatar', avatar)
        formData.append('MSSV', MSSV)
        formData.append('hoten', hoten)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('phong', phong)
        axios.put('http://localhost:3000/user/update/' + id, formData)
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
                    <h1 className={cx("title")}>Chỉnh sửa thông tin</h1>
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
                                                    defaultValue={MSSV || ""} onChange={e => {
                                                        setMSSV(e.target.value)
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
                                                <p className="mb-0">Dãy</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <select name="day" style={{ border: "none", backgroundColor: "#F0F0F0", borderRadius: "5px" }}
                                                    value={day} onChange={e => setDay(e.target.value)}
                                                >
                                                    <option value="">Chọn dãy</option>
                                                    {
                                                        dsDay?.map((d, i) =>
                                                            <option key={i} value={d.ID_Day}>{d.TenDay}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p>Phòng</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <select name="phong" style={{ border: "none", backgroundColor: "#F0F0F0", borderRadius: "5px" }}
                                                    value={phong} onChange={e => setPhong(e.target.value)}
                                                >
                                                    <option value="">Chọn phòng</option>
                                                    {
                                                        dsPhong?.map((phong, i) =>
                                                            <option key={i} value={phong.ID_Phong}>{phong.TenPhong}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Role</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className={cx("inputInfo")} type="text" disabled defaultValue={role || ""} name="role" id="" />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to={"/info"}> <button className={cx("btnClose")} >Đóng</button></Link>
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

export default EditInfo;