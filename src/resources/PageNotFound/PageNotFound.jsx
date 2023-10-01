import classNames from "classnames/bind";
import styles from "./PageNotFound.module.scss";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className="container">
            <div className="d-flex">
                <img className={cx("imgNotFound")} src="../../../../img/img_page/NotFound.png" alt="" />

            </div>
            <div className="d-flex">
                <Link className="m-auto text-decoration-none" to="/home" ><button className={cx("btnBackHome")}>BACK HOME</button></Link>
            </div>

        </div>
    );
}

export default NotFound;