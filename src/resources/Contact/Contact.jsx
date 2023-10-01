import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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


    return (
        <div className="container">
            <div className={`row d-flex justify-content-center align-items-center h-100 ${cx("homePage")}`}>
                <div className={`col-md-5 col-lg-5 ${cx("contentHomePage")}`}>
                    <h1 className={cx("titleIntro")}>Liên hệ với chúng tôi</h1>
                    <ReadMore>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure ducimus nam impedit eum, voluptate inventore animi quas, nesciunt labore dolore ipsam modi tempore, assumenda voluptas quo vitae facere vel.
                    </ReadMore>

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
                                    <input className={cx("inputForm")} name="username" autoComplete='off' placeholder='Username' required></input>

                                </div>
                                <div className={cx("groupInput")}>
                                    <span className={cx("iconInput2")}><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></span>
                                    <input className={cx("inputForm")} name="username" autoComplete='off' placeholder='Email' required></input>

                                </div>

                                <textarea className={cx("textArea")} name="" id="" cols="30" rows="10" placeholder='Your text'></textarea>

                                <button className={cx("btnContact")}>Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div >
        </div >
    );
}

export default Contact;