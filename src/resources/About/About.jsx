import styles from './About.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPhoneVolume, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';



const cx = classNames.bind(styles)

function About() {


    return (
        <div>
            <div className={cx("introAbout")}>
                <div className='container d-flex h-100 align-items-center position-relative'>
                    <h1 className={`${cx("titleIntro")}`}>Về chúng tôi</h1>
                    <span><img className={`${cx("tool")}`} src='../../../img/icon/tool.gif' /></span>
                </div>

            </div>
            <div className="container">
                <div className={`row d-flex justify-content-center align-items-center ${cx("contactPage")}`}>
                    <div className={`col-md-6 col-lg-6`}>
                        <h1 className=" ms-3">Tầm nhìn của bạn, Tương lai của chúng tôi</h1>
                        <div className={`ms-5 ${cx("desAbout")}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, perferendis?</div>
                    </div>
                    <div className="col-md-6 col-lg-6 d-none d-lg-block">
                        <img className={`${cx("imgAbout")}`} src="../../../img/img_page/Maintenance-rafiki.png" />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{
                        once: true,
                    }}
                >

                    <div className={cx("infoTeam")}>
                        <h1 className='text-center '>Thành viên <span><FontAwesomeIcon icon={faUsers} size="sm" style={{ color: "#2adcdf", }} /></span></h1>
                        <div className="row ms-5 me-5">
                            <div className={`col ${cx("infoUserTeam")}`}>
                                <img src='../../../img/avatar/user1.png' className={cx("imgTeam")} />
                                <div className={cx("infoUser")}>
                                    <h2 className='text-center text-dark'>Trần Hoàng Trân</h2>
                                    <h4 className='text-center text-dark'>Tổng Giám Đốc</h4>
                                </div>
                            </div>
                            <div className={`col ${cx("infoUserTeam")}`}>
                                <img src='../../../img/avatar/user2.png' className={cx("imgTeam")} />
                                <div className={cx("infoUser")}>
                                    <h2 className='text-center text-dark'>Trần Hoàng Trân</h2>
                                    <h4 className='text-center text-dark'>Tổng Giám Đốc</h4>
                                </div>
                            </div><div className={`col ${cx("infoUserTeam")}`}>
                                <img src='../../../img/avatar/user3.png' className={cx("imgTeam")} />
                                <div className={cx("infoUser")}>
                                    <h2 className='text-center text-dark'>Trần Hoàng Trân</h2>

                                    <h4 className='text-center text-dark'>Tổng Giám Đốc</h4>
                                </div>
                            </div><div className={`col ${cx("infoUserTeam")}`}>
                                <img src='../../../img/avatar/user4.png' className={cx("imgTeam")} />
                                <div className={cx("infoUser")}>
                                    <h2 className='text-center text-dark'>Trần Hoàng Trân</h2>
                                    <h4 className='text-center text-dark'>Tổng Giám Đốc</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>

                <div className={`row d-flex justify-content-center align-items-center h-100 ${cx("hidden")}`}>
                    <h1 className='text-center mt-5'>Thông tin về chúng tôi</h1>
                    <div className={`col-md-6 col-lg-6 ${cx("contentHomePage")}`}>
                        <h1 className='ms-5'>Đội ngũ hỗ trợ</h1>
                        <h3 className='text-light ms-5'>Bạn có vấn đề? Cần người giúp đỡ? Hãy liên hệ với chúng tôi</h3>
                        <div className="contentContact">
                            <div className={cx("address")}>
                                <span><FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffffff", }} /></span>
                                <p>0978545265</p>

                            </div>
                            <div className={cx("address")}>
                                <span className={cx("iconEmail")}><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /></span>
                                <p>repariservice@gmail.com</p>

                            </div>
                            <div className={cx("address")}>
                                <span><FontAwesomeIcon icon={faClock} style={{ color: "#ffffff", }} /></span>
                                <ul className='p-0'>
                                    <li className="list-group-item">Thời gian hoạt động</li>
                                    <li className="list-group-item">Mon - Fri: 9:00 a.m. to 8:00 p.m</li>
                                    <li className="list-group-item">Sat & Sun: 10:00 a.m. to 6:00 p.m</li>

                                </ul>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-6 d-none d-lg-block">
                        <img className={`${cx("imgHomeRepair")}`} src="../../../img/img_page/Company-rafiki.png" width={400} />
                    </div>
                </div>
            </div>

        </div >
    );


}

export default About;