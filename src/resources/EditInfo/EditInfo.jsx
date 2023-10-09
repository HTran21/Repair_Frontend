import classNames from "classnames/bind";
import styles from "./EditInfo.module.scss";

const cx = classNames.bind(styles);

function EditInfo() {
    return (
        <div className={cx("contentPage")}>
            <h1>EDIT</h1>
        </div>
    );
}

export default EditInfo;