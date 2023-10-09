import classNames from "classnames/bind";
import styles from "./OnlyLayout.module.scss";

const cx = classNames.bind(styles);

function OnlyLayout({ children }) {
    return (
        <div className={cx("content")}>
            {children}
        </div>
    );
}

export default OnlyLayout;