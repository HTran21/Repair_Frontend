import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ScrollButton.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ScrollButton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        } else if (scrolled <= 200) {
            setVisible(false)
        }
    };

    const scrollonTop = () => {
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={cx("buttonToTop")} >
            <div className={cx("bgButton")} onClick={scrollonTop} style={{ display: visible ? 'block' : 'none' }}>
                <FontAwesomeIcon icon={faArrowUp} className={cx("iconTop")} />
            </div>
        </div >
    );
}

export default ScrollButton;