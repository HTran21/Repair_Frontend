import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { useEffect } from "react";

import { motion } from 'framer-motion';


const cx = classNames.bind(styles);

function Home() {

    return (
        <div className="container">

            <motion.div
                className={`row d-flex justify-content-center align-items-center h-100 ${cx("homePage")}`}

                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{
                    once: true,
                }}
            >
                <div className={`col-md-6 col-lg-6 ${cx("contentHomePage")}`}>
                    <h1 className={cx("titleIntro")}>Chào mừng bạn đến với dịch vụ sửa chữa của chúng tôi</h1>
                    <h3 className={cx("desIntro")}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum harum aut cumque quam nulla porro saepe cum? Nisi, corporis porro?</h3>
                    <button className={cx("btnHomeRepair")}>Sửa chữa ngay</button>

                </div>

                <div className="col-md-6 col-lg-6 d-none d-lg-block">
                    <img className={`${cx("imgHomeRepair")}`} src="../../../img/img_page/illustration_contact2.png" />
                </div>

            </motion.div>
            <motion.div

                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{
                    once: true,
                }}
            >

                <div className={cx("itemList")}>
                    <div className="row w-100 d-flex justify-content-between">
                        <div className={`col ${cx("imgItem")}`}>
                            <img className="d-flex m-auto" src="../../../img/icon/bed.png" width={60} />
                        </div>
                        <div className={`col ${cx("imgItem")}`}>
                            <img className="d-flex m-auto" src="../../../img/icon/fan.png" width={60} />
                        </div>
                        <div className={`col ${cx("imgItem")}`}>
                            <img className="d-flex m-auto" src="../../../img/icon/lightbulb.png" width={60} />
                        </div>
                        <div className={`col ${cx("imgItem")}`}>
                            <img className="d-flex m-auto" src="../../../img/icon/toilet.png" width={60} />
                        </div>
                        <div className={`col ${cx("imgItem")}`}>
                            <img className="d-flex m-auto" src="../../../img/icon/basin.png" width={60} />
                        </div>
                    </div>

                </div>
                <div className={`w-100 d-flex justify-content-center mb-5 mt-0 ${cx("divButton")}`}>
                    <button className={cx("buttonSeeMore")}>See more</button>
                    <div className={cx("line")}></div>
                </div>
            </motion.div>


            <div className={`row d-flex justify-content-center align-items-center h-100 ${cx("homePage2")}`}>
                <div className={`col-md-6 col-lg-6 ${cx("contentHomePage")}`}>
                    <h1 className={cx("titleIntro")}>Chúng tôi có thể sửa chữa mọi thứ một cách nhanh chóng</h1>
                    <h3 className={cx("desIntro")}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum harum aut cumque quam nulla porro saepe cum? Nisi, corporis porro?</h3>
                    <button className={cx("btnContactRepair")}>Về chúng tôi</button>

                </div>
                <div className="col-md-6 col-lg-6 d-none d-lg-block">
                    <img className={`${cx("imgHomeRepair")}`} src="../../../img/img_page/illustration_contact.png" />
                </div>
            </div>

            <div>
                <h1 className="text-center">Chúng tôi có thể làm gì?</h1>
                <div className={`row text-light w-100 d-flex justify-content-between ${cx("problemRepair")}`}>

                    <div className="col">
                        <div className={cx("problem")}>
                            <h3>Thay mới thiết bị</h3>
                            <div className={cx("desProblem")}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <img src="../../../img/icon/replace.png" width={50} />
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("problem")}>
                            <h3>Bảo trì thiết bị</h3>
                            <div className={cx("desProblem")}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <img src="../../../img/icon/tools.png" width={50} />
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("problem")}>
                            <h3>Nâng cấp thiết bị</h3>
                            <div className={cx("desProblem")}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <img src="../../../img/icon/updated.png" width={50} />
                        </div>
                    </div>
                </div>

            </div>

            <div className={`text-center ${cx("phone")}`}>
                <h1>Một cuộc gọi có thể giải quyết tất cả vấn đề của bạn</h1>
                <div className="desphone mt-4">
                    <img className={cx("imgPhone")} src="../../../img/icon/phone-call.png" />
                    <div className={cx("numberPhone")}>
                        0987876765
                    </div>
                    <div className="moreContact">
                        <h1 style={{ fontSize: "28px" }} className="text-center text-light">Liên hệ với chúng tôi</h1>
                        <div className={cx("listIcon")}>
                            <img className={cx("imgIcon")} src="../../../img/icon/facebook-app-symbol.png" />
                            <img className={cx("imgIcon")} src="../../../img/icon/twitter.png" />
                            <img className={cx("imgIcon")} src="../../../img/icon/instagram.png" />
                            <img className={cx("imgIcon")} src="../../../img/icon/github.png" />
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}



export default Home;