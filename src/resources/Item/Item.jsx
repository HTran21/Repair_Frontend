import classNames from 'classnames/bind';
import styles from './Item.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTrash, faPenToSquare, faImage, faTag, faMaximize, faCircleInfo, faFillDrip, faRecycle } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';


const cx = classNames.bind(styles);

function Item() {

    const [data, setData] = useState();
    const [show, setShow] = useState(false);

    const [recordView, setRecordView] = useState();

    const [search, setsearch] = useState('');

    const handleView = (item) => {
        setShow(true)
        setRecordView(item)
    }

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // Search
    const handleSearch = () => {
        if (search.trim() === '') {
            toast.error("Vui lòng nhập ký tự")
        }
        else {
            axios.get(`http://localhost:3000/product?search=${search}`)
                .then(res => {
                    if (res.data.length > 0) {
                        console.log("Data search", res.data)
                        setData(res.data)
                    }
                    else {
                        setData([]);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi nhận dữ liệu từ API', error);
                });
        }
    }

    return (
        <div>
            <div className={cx("introItem")}>
                <div className='container  h-100 align-items-center justify-content-center text-center position-relative'>
                    <h1 className={`${cx("titleIntro")}`}>DANH SÁCH THIẾT BỊ SỬA CHỮA</h1>
                    <h3 className='text-light p-4'>Tìm khiếm thiết bị bạn mong muốn</h3>
                    <div className={cx("groupInput")}>
                        <div className={cx("search")}>
                            <span onClick={handleSearch} className={cx("inconSearch")}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7c7e83", }} /></span>
                            <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} className={cx("inputSearch")} placeholder='Search...' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='container '>
                <h3 className='text-light p-4 text-center'>Hoặc có thể xem danh sách bên dưới</h3>
                <div className={`${cx("contentListItem")}`}>
                    <div className={cx("items")}>

                        {data?.map((item, i) =>
                            <div onClick={() => handleView(item)} className={`${cx("item")}`} key={i}>
                                <img className={cx("imgItem")} src={`http://localhost:3000/${item.imageItem}`} />

                                <div className={cx("contentItem")}>
                                    <div className={cx("nameItem")}>{item.nameItem}</div>

                                </div>

                            </div>

                        )}

                    </div>
                </div>
            </div>
            <Modal size='lg' show={show} onHide={handleClose}>
                <form action="" encType="multipart/form-data">
                    <Modal.Header closeButton>
                        <Modal.Title ><h1 className='text-dark m-0'>Thông tin chi tiết</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={cx("bodyModal")}>
                        <div className="row">
                            <div className={`${cx("leftModal")} col-lg-6 col-md-5 col-sm-12`}>
                                <img className={cx("imgModal")} src={`http://localhost:3000/${recordView?.imageItem}`} alt="" />
                            </div>
                            <div className={`${cx("rightModal")} col-lg-6 col-md-7 col-sm-12`}>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                    <input className={cx("inputGroup")} type="text" disabled defaultValue={recordView?.nameItem}
                                        name="nameItem" id="" placeholder='Tên sản phẩm...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                    <input className={cx("inputGroup")} type="text" disabled defaultValue={recordView?.sizeItem}
                                        name="sizeItem" id="" placeholder='Kích thước....' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faFillDrip} /></span>
                                    <input className={cx("inputGroup")} type="text" disabled defaultValue={recordView?.colorItem}
                                        name="colorItem" id="" placeholder='Màu sắc...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faRecycle} /></span>
                                    <input className={cx("inputGroup")} type="text" disabled defaultValue={recordView?.chatlieu}
                                        name="chatlieu" id="" placeholder='Chất liệu...' />
                                </div>
                                <div className={cx("group")}>
                                    <textarea className={cx("textAreaGroup")} placeholder='Mô tả' disabled defaultValue={recordView?.desItem}
                                        name="desItem" id="" cols="27" rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size='lg' style={{ fontSize: "16px" }} className={cx("btnClose")} variant="secondary" onClick={handleClose}>Đóng</Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </div>
    );
}

export default Item;