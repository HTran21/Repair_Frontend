import className from 'classnames/bind'
import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash, faIdCard, faEnvelope, faPhone, faImage, faBuilding, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import toast from 'react-hot-toast'
import toast from 'react-hot-toast';


const cx = className.bind(styles)

function Register() {

    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasword = () => {
        setPasswordShown(!passwordShown);
    }
    // const [passwordShown2, setPasswordShown2] = useState(false);

    // const togglePasword2 = () => {
    //     setPasswordShown2(!passwordShown2);
    // }

    // const [values, setValues] = useState({
    //     MSSV: '',
    //     username: '',
    //     password: '',
    //     email: '',
    //     phone: '',
    // })

    // const handleInput = (e) => {
    //     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    // }

    const [avatar, setAvatar] = useState();
    const [MSSV, setMSSV] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [day, setDay] = useState('');
    const [phong, setPhong] = useState('');

    const [dsDay, setDsday] = useState();
    const [dsPhong, setDsPhong] = useState();

    const [errors, setErrors] = useState({});

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

    const upload = () => {
        const newErrors = {};

        if (MSSV.trim() === '') {
            newErrors.MSSV = 'MSSV is required';
        }

        if (username.trim() === '') {
            newErrors.username = 'Username is required';
        }

        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }

        if (email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!avatar) {
            newErrors.avatar = 'Image is required';
        }

        if (day === '') {
            newErrors.day = 'Please select an option';
        }

        if (phong === '') {
            newErrors.phong = 'Please select an option';
        }

        if (phone === '') {
            newErrors.phone = 'Phone is required';
        } else if (phone.length < 10) {
            newErrors.phone = 'Invalid phone number';
        }

        if (Object.keys(newErrors).length === 0) {
            const formData = new FormData()
            formData.append('avatar', avatar)
            formData.append('MSSV', MSSV)
            formData.append('username', username)
            formData.append('password', password)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('phong', phong)
            axios.post('http://localhost:3000/authentication/adduser', formData)
                .then(res => {
                    if (res.data.error) {
                        toast.error(res.data.error)
                    }
                    else {
                        toast.success(res.data.message)

                        navigate('/login')

                    }

                })
                .catch(err => console.log(err));
        }
        else {
            setErrors(newErrors);
        }

    }


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:3000/authentication/adduser', values)
    //         .then(res => {
    //             if (res.data.error) {
    //                 toast.error(res.data.error)
    //             }
    //             else {
    //                 navigate('/login')

    //             }

    //         })
    //         .catch(err => console.log(err));
    // }



    return (
        <div className="container">
            <div className={cx("contentLogin")}>
                <form action="" encType='multipart/form-data'>
                    <div className={`row d-flex justify-content-center align-items-center m-auto mt-4`}>
                        <div className='d-flex'>
                            <img className={cx("logoFrom")} src="../../../../img/logo/logo1.jpg" alt='logo' />
                        </div>
                        <h1 className='text-center mb-1'>REGISTER</h1>
                        <div className={`${cx("desRegister")} w-75 mb-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, mollitia!</div>
                        <div className="col-md-6 col-lg-6">
                            <div className={cx("contentForm")}>
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faIdCard} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm")} name="MSSV" autoComplete='off'
                                        value={MSSV} onChange={e => setMSSV(e.target.value)} placeholder='Mã số sinh viên' required></input>
                                </div>
                                {errors.MSSV && <p className={cx("error")}>{errors.MSSV}</p>}
                                <div className={cx("groupInput2")}>
                                    <span className={`${cx("iconInput2")} `}><FontAwesomeIcon icon={faLock} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm2")} name="password" autoComplete='off' placeholder='Password'
                                        value={password} type={passwordShown ? "text" : "password"} onChange={e => setPassword(e.target.value)} required></input>
                                    <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test")}`} />
                                    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test2")}`} />
                                </div>
                                {errors.password && <p className={cx("error")}>{errors.password}</p>}

                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm")} name="phone" autoComplete='off'
                                        value={phone} onChange={e => setPhone(e.target.value)} placeholder='Phone number' required></input>

                                </div>
                                {errors.phone && <p className={cx("error")}>{errors.phone}</p>}

                                <div className={cx("groupInput3")}>
                                    <span className={cx("iconInput")}><FontAwesomeIcon icon={faBuilding} style={{ color: "#ffffff", }} /></span>
                                    <select className={cx("selectItem")} name="day"
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
                                {errors.day && <p className={cx("error")}>{errors.day}</p>}

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className={cx("contentForm")}>
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} /></span>
                                    <input className={cx("inputForm")} name="username" autoComplete='off'
                                        value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' required></input>

                                </div>
                                {errors.username && <p className={cx("error")}>{errors.username}</p>}
                                <div className={cx("groupInput2")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm")} name="email" autoComplete='off'
                                        value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required></input>

                                </div>
                                {errors.email && <p className={cx("error")}>{errors.email}</p>}
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", }} /></span>
                                    <input type='file' accept="image/jpeg, image/png, image/jpg" className={cx("inputForm")} name="avatar"
                                        onChange={e => setAvatar(e.target.files[0])} placeholder='Avatar' required></input>

                                </div>
                                {errors.avatar && <p className={cx("error")}>{errors.avatar}</p>}

                                <div className={cx("groupInput3")}>
                                    <span className={cx("iconInput")}><FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} /></span>
                                    <select className={cx("selectItem")} name="phong"
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
                                {errors.phong && <p className={cx("error")}>{errors.phong}</p>}
                            </div>


                        </div>
                        <div className="check">

                            <button type='button' onClick={upload} className={cx("btnLogin")}>Register</button>

                            <p className='text-light text-center mb-5'>Bạn muốn đăng nhập?
                                <Link to="/login"
                                    className={`text-decoration-none ${cx("textLink")}`}>
                                    <strong> Login</strong>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Register;