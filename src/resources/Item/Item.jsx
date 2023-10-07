import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useEffect, useState } from 'react';


const cx = classNames.bind(styles);

function Item() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])

    console.log(data)


    return (
        <div>
            <div className={cx("introItem")}>
                <div className='container  h-100 align-items-center justify-content-center text-center position-relative'>
                    <h1 className={`${cx("titleIntro")}`}>DANH SÁCH THIẾT BỊ SỬA CHỮA</h1>
                    <h3 className='text-light p-4'>Tìm khiếm thiết bị bạn mong muốn</h3>
                    <div className={cx("groupInput")}>
                        <div className={cx("search")}>
                            <span className={cx("inconSearch")}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7c7e83", }} /></span>
                            <input type="text" className={cx("inputSearch")} placeholder='Search...' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='container '>
                <h3 className='text-light p-4 text-center'>Hoặc có thể xem danh sách bên dưới</h3>
                <div className={`${cx("contentListItem")}`}>
                    <div className={cx("items")}>

                        {data?.map((item, i) => <h1 key={i}>{item.nameItem}</h1>)}

                        <div className={`${cx("item")}`}>
                            <img className={cx("imgItem")} src='../../../img/item/toilet.png' />

                            <div className={cx("contentItem")}>
                                <div className={cx("nameItem")}>Tolet</div>

                            </div>

                        </div>
                        {/* <div className={`${cx("item")}`}>
                            <img className={cx("imgItem")} src='../../../img/item/toilet.png' />

                            <div className={cx("contentItem")}>
                                <div className={cx("nameItem")}>Tolet</div>

                            </div>

                        </div>
                        <div className={`${cx("item")}`}>
                            <img className={cx("imgItem")} src='../../../img/item/toilet.png' />

                            <div className={cx("contentItem")}>
                                <div className={cx("nameItem")}>Tolet</div>

                            </div>

                        </div>
                        <div className={`${cx("item")}`}>
                            <img className={cx("imgItem")} src='../../../img/item/toilet.png' />

                            <div className={cx("contentItem")}>
                                <div className={cx("nameItem")}>Tolet</div>

                            </div>

                        </div>
                        <div className={`${cx("item")}`}>
                            <img className={cx("imgItem")} src='../../../img/item/toilet.png' />

                            <div className={cx("contentItem")}>
                                <div className={cx("nameItem")}>Tolet</div>

                            </div>

                        </div>
                        <div className={`${cx("item")}`}>
                            <img className={cx("imgItem")} src='../../../img/item/toilet.png' />

                            <div className={cx("contentItem")}>
                                <div className={cx("nameItem")}>Tolet</div>

                            </div>

                        </div> */}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Item;