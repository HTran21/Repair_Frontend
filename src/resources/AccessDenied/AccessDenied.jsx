import classNames from "classnames/bind";
import styles from "./AccessDenied.module.scss";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccessDenied() {
    return (
        <div className="container">
            <div className="d-flex">
                <img className={cx("imgDenied")} src="../../../../img/img_page/403.png" alt="" />

            </div>
            <p className={cx("textPage")}>ACCESS DENIED</p>

            <div className="d-flex">
                <Link className="m-auto text-decoration-none" to="/home" ><button className={cx("btnBackHome")}>BACK HOME</button></Link>
            </div>

        </div>
    );
}

export default AccessDenied;