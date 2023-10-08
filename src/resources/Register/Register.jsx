import className from 'classnames/bind'
import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash, faIdCard, faEnvelope, faPhone, faImage } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
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

    const [values, setValues] = useState({
        MSSV: '',
        username: '',
        password: '',
        email: '',
        phone: '',
    })

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/authentication/adduser', values)
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error)
                }
                else {
                    navigate('/login')

                }

            })
            .catch(err => console.log(err));
    }



    return (
        <div className="container">
            <div className={cx("contentLogin")}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={`row d-flex justify-content-center align-items-center m-auto mt-5`}>
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
                                        value={values.MSSV} onChange={handleInput} placeholder='Mã số sinh viên' required></input>

                                </div>
                                <div className={cx("groupInput2")}>
                                    <span className={`${cx("iconInput2")} `}><FontAwesomeIcon icon={faLock} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm2")} name="password" autoComplete='off' placeholder='Password'
                                        value={values.password} type={passwordShown ? "text" : "password"} onChange={handleInput} required></input>
                                    <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test")}`} />
                                    <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#ffffff", }} onClick={togglePasword} className={`pt-2 ${cx("test2")}`} />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className={cx("contentForm")}>
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput")}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} /></span>
                                    <input className={cx("inputForm")} name="username" autoComplete='off'
                                        value={values.username} onChange={handleInput} placeholder='Username' required></input>

                                </div>
                                <div className={cx("groupInput2")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm")} name="email" autoComplete='off'
                                        value={values.email} onChange={handleInput} placeholder='Email' required></input>

                                </div>
                            </div>


                        </div>
                        <div className="check">
                            <div className={cx("groupInput4")}>
                                <span className={cx("iconInput2")}><FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} /></span>
                                <input className={cx("inputForm")} name="phone" autoComplete='off'
                                    value={values.phone} onChange={handleInput} placeholder='Phone number' required></input>

                            </div>
                            <button type='submit' className={cx("btnLogin")}>Register</button>

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