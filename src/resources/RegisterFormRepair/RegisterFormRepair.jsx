import classNames from 'classnames/bind';
import styles from './RegisterFormRepair.module.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from 'moment-timezone';

const cx = classNames.bind(styles);

function RegisterFormRepair() {

    const { id } = useParams();

    const ID_Staff = localStorage.getItem("ID_User");

    const [date, setDate] = useState();
    const [MSSV, setMSSV] = useState('');
    const [hoten, setHoten] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [day, setDay] = useState('');
    const [phong, setPhong] = useState('');
    const [thietbi, setThietbi] = useState();
    const [mota, setMota] = useState('');

    const [ngayDuyet, setNgayDuyet] = useState();
    const [nhanvien, setNhanvien] = useState('');


    const [staff, setStaff] = useState();

    const [items, setItems] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then(res => {
                setItems(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3000/user/staff')
            .then(res => {
                setStaff(res.data)
                console.log("Nhan vien", res.data)
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3000/repair/update/' + id)
            .then(res => {
                setMSSV(res.data.MSSV)
                setHoten(res.data.HoTen)
                setEmail(res.data.email)
                setPhone(res.data.phone)
                setDay(res.data.TenDay)
                setPhong(res.data.TenPhong)
                setThietbi(res.data?.ID_item)
                const NgayDK = res.data.NgayDK;
                // const formattedDate = new Date(NgayDK).toISOString().split('T')[0];
                const formattedDate = moment(NgayDK).tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD');
                setDate(formattedDate);
                setMota(res.data.MoTa);
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ngay Duyet", ngayDuyet);
        console.log("Nhan vien", nhanvien);
        axios.put('http://localhost:3000/repair/accept/' + id, { nhanvien, ngayDuyet })
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error)
                }
                else {
                    toast.success(res.data.message)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className={cx("containPage")}>

                <div className={cx("contentPage")}>
                    <section >
                        <div className="">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col col-xl-10">
                                    <div className="card p-2 mt-5" style={{ borderRadius: "1rem" }}>
                                        <div className={cx("titlePage")}>
                                            ĐĂNG KÝ SỬA CHỮA
                                        </div>
                                        <div className="row g-0">

                                            <div className="col-md-6 col-lg-7">

                                                <div className="card-body text-black">
                                                    <form action="" onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className={cx("inputGroup")}>
                                                                    <label htmlFor='MSSV' className={cx("labelInput")}>MSSV</label>
                                                                    <input type="text" className={cx("inputForm")} name="MSSV" id="MSSV"
                                                                        defaultValue={MSSV} onChange={e => setMSSV(e.target.value)} disabled />
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className={cx("inputGroup")}>
                                                                    <label className={cx("labelInput")}>Họ tên</label>
                                                                    <input type="text" className={cx("inputForm")} name="hoten" id=""
                                                                        defaultValue={hoten} onChange={e => setHoten(e.target.value)} disabled />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className={cx("inputGroup")}>
                                                            <label className={cx("labelInput")}>Email</label>
                                                            <input type="text" className={cx("inputForm")} name="email" id=""
                                                                defaultValue={email} onChange={e => setEmail(e.target.value)} disabled />
                                                        </div>
                                                        <div className={cx("inputGroup")}>
                                                            <label className={cx("labelInput")}>Phone</label>
                                                            <input type="text" className={cx("inputForm")} name="phone" id=""
                                                                defaultValue={phone} onChange={e => setPhone(e.target.value)} disabled />
                                                        </div>
                                                        <div className="row ">
                                                            <div className="col">
                                                                <div className={cx("inputGroup2")}>
                                                                    <label className={cx("labelInput")}>Dãy</label>
                                                                    <input className={cx("inputForm")} type="text" name="" id=""
                                                                        defaultValue={day} onChange={e => setDay(e.target.value)} disabled />
                                                                </div>
                                                            </div>
                                                            <div className="col d-flex justify-content-end">
                                                                <div className={cx("inputGroup2")}>
                                                                    <label className={cx("labelInput")}>Phòng</label>
                                                                    <input className={cx("inputForm")} type="text" name="" id=""
                                                                        defaultValue={phong} onChange={e => setPhong(e.target.value)} disabled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <div className={cx("inputGroup")}>
                                                                    <label className={cx("labelInput")}>Thiết bị</label>
                                                                    <select className={cx("selectItem")} name="thietbi" id="" required
                                                                        value={thietbi} onChange={e => setThietbi(e.target.value)} disabled>
                                                                        <option value="">Chọn thiết bị</option>
                                                                        {
                                                                            items?.map((item, i) =>
                                                                                <option key={i} value={item.ID_item}>{item.nameItem}</option>
                                                                            )
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-7">
                                                                <div className={cx("inputGroup")}>
                                                                    <label className={cx("labelInput")}>Người sửa chữa</label>
                                                                    <select className={cx("selectItem")} name="thietbi" id="" required
                                                                        value={nhanvien} onChange={e => setNhanvien(e.target.value)}>
                                                                        <option value="">Chọn người sửa chữa</option>
                                                                        {
                                                                            staff?.map((item, i) =>
                                                                                <option key={i} value={item.ID_Staff}>{item.hoten}</option>
                                                                            )
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col">
                                                                <div className={cx("inputGroup")}>
                                                                    <label className={cx("labelInput")}>Ngày đăng ký</label>
                                                                    <input type="date" className={cx("inputForm")} name="dateRepair" id=""
                                                                        defaultValue={date} />
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className={cx("inputGroup")}>
                                                                    <label className={cx("labelInput")}>Ngày hẹn</label>
                                                                    <input type="date" className={cx("inputForm")} name="dateRepair" id=""
                                                                        defaultValue={ngayDuyet} onChange={(e) => setNgayDuyet(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className={cx("inputGroup3")}>
                                                            <label className={cx("labelInput")}>Thời gian hẹn</label>
                                                            <div className='d-flex'>
                                                                <div className={cx("timeChoose")}>
                                                                    <input type="radio" name="timeRepair" id="8AM" value="8AM" />
                                                                    <label htmlFor="8AM">8AM</label>
                                                                </div>
                                                                <div className={cx("timeChoose")}>
                                                                    <input type="radio" name="timeRepair" id="12AM" value="12AM" />
                                                                    <label htmlFor="12AM">12AM</label>
                                                                </div>
                                                                <div className={cx("timeChoose")}>
                                                                    <input type="radio" name="timeRepair" id="3PM" value="3PM" />
                                                                    <label htmlFor="3PM">3PM</label>
                                                                </div>
                                                            </div>
                                                        </div> */}


                                                        <div className={cx("inputGroup2")}>
                                                            <label className={cx("labelTextarea")}>Mô tả</label>
                                                            <textarea className={cx("desRepair")} name="desRepair" id="" cols="30" rows="5"
                                                                value={mota} onChange={e => setMota(e.target.value)} required></textarea>
                                                        </div>
                                                        <div className="d-flex justify-content-end">
                                                            <Link to={"/repairadmin"} className='text-decoration-none'>
                                                                <div className={cx("btnClose")}>Hủy</div>
                                                            </Link>
                                                            <button className={cx("btnRepair")}>Duyệt</button>
                                                        </div>



                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-5 d-none d-md-block m-auto d-flex">
                                                <img
                                                    src="../../../../public/img/img_page/repair.png"
                                                    alt="login form"
                                                    className="img-fluid "
                                                    style={{ borderRadius: "1rem 0 0 1rem" }}
                                                />
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

export default RegisterFormRepair;