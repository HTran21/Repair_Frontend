import className from 'classnames/bind'
import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config('.env');

// const secretKey = process.env.JWT_SECRET;

import toast from 'react-hot-toast';

const cx = className.bind(styles)

function Login() {

    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasword = () => {
        setPasswordShown(!passwordShown);
    }

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [dataUser, setDataUser] = useState({});

    // console.log('>> dataUser', dataUser);
    // console.log('>> name', dataUser.username);

    // const values = { username, password }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:3000/login', values)
    //         .then(res => {

    //             setDataUser(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }

    const [values, setValues] = useState({
        MSSV: '',
        password: '',
    })

    const [errors, setErrors] = useState({});


    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        const newErrors = {};
        if (values.MSSV.trim() === '') {
            newErrors.MSSV = 'MSSV is required';
        }
        if (values.password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        if (Object.keys(newErrors).length === 0) {
            axios.post('http://localhost:3000/authentication/login', values)
                .then(res => {
                    if (res.data.error) {
                        toast.error(res.data.error)
                    }
                    else {
                        // localStorage.setItem("Info", res.data)

                        if (res.data.data.role == 'AD') {
                            const ID_User = res.data.data.ID_Staff;
                            const MSSV = res.data.data.MaNV;
                            const avatar = res.data.data.avatar;
                            const role = res.data.data.role;
                            localStorage.setItem("ID_User", ID_User);
                            localStorage.setItem("MSSV", MSSV);
                            localStorage.setItem("avatar", avatar);
                            localStorage.setItem("role", role);
                            localStorage.setItem("isLogin", "true");

                            navigate('/admin');
                        }
                        else {
                            const ID_User = res.data.data.ID_User;
                            const MSSV = res.data.data.MSSV;
                            const avatar = res.data.data.avatar;
                            const role = res.data.data.role;
                            localStorage.setItem("ID_User", ID_User);
                            localStorage.setItem("MSSV", MSSV);
                            localStorage.setItem("avatar", avatar);
                            localStorage.setItem("role", role);
                            localStorage.setItem("isLogin", "true");

                            navigate('/home');
                        }
                    }
                })
                .catch(err => console.log(err));
            // .then(res => {
            //     if (res.data.error) {
            //         toast.error(res.data.error)
            //     }
            //     else {
            //         // localStorage.setItem("Info", res.data)
            //         const ID_User = res.data.values.ID_User;
            //         const MSSV = res.data.values.MSSV;
            //         const avatar = res.data.values.avatar;
            //         const role = res.data.values.role;
            //         localStorage.setItem("ID_User", ID_User);
            //         localStorage.setItem("MSSV", MSSV);
            //         localStorage.setItem("avatar", avatar);
            //         localStorage.setItem("role", role);
            //         localStorage.setItem("isLogin", "true");

            //         if (res.data.values.role == 'AD') {
            //             navigate('/admin');
            //         }
            //         else {
            //             navigate('/home');
            //         }
            //     }
            // })
            // .catch(err => console.log(err));
        }
        else {
            setErrors(newErrors);
        }

    }



    return (
        <div className="container">
            <div className={`row d-flex justify-content-center align-items-center w-75 m-auto mt-5 ${cx("contentLogin")}`}>
                <div className="col col-md-6 col-lg-6 d-none d-md-block m-auto">
                    <img src="../../../../img/img_page/login.png" className={cx("imgLogin")} alt="" />
                </div>

                <div className="col-md-6 col-lg-6">
                    <h1 className={cx("titleWelcome")}>WELCOME BACK</h1>
                    <div className={`d-flex align-items-center m-auto ${cx("contentFormLogin")}`}>
                        <form className={cx("formLogin")} action="" onSubmit={handleSubmit}>
                            <div className={cx("titleForm")}>
                                <img className={cx("logoFrom")} src="../../../../img/logo/logo1.jpg" alt='logo' />
                                <h2 className={cx("title")}>LOGIN</h2>
                                <p className={cx("desForm")}>Vui lòng đăng nhập bằng tài khoản của bạn</p>
                            </div>
                            <div className="contentForm ">
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} /></span>
                                    <input className={cx("inputForm")} name="MSSV" autoComplete='off' placeholder='Mã số sinh viên'
                                        value={values.MSSV} onChange={handleInput} ></input>

                                </div>
                                {errors.MSSV && <p className={cx("error")}>{errors.MSSV}</p>}
                                {/* <p className={cx("textError")}>Khong duoc de trong</p> */}
                                <div className={cx("groupInput2")}>
                                    <span className={`${cx("iconInput2")} `}><FontAwesomeIcon icon={faLock} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm2")} name="password" autoComplete='off' placeholder='Password'
                                        value={values.password} type={passwordShown ? "text" : "password"} onChange={handleInput}></input>
                                    <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test")}`} />
                                    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test2")}`} />
                                </div>
                                {errors.password && <p className={cx("error")}>{errors.password}</p>}
                                <button type='submit' className={cx("btnLogin")}>Login</button>

                                <p className='text-light text-center'>Bạn đã có tài khoản chưa?
                                    <Link to="/Register"
                                        className={`text-decoration-none ${cx("textLink")}`}>
                                        <strong> Sign up</strong>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>


                </div>


            </div>

        </div >
    )
}

export default Login;