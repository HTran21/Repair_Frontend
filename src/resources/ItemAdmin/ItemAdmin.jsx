import classNames from "classnames/bind";
import styles from "./ItemAdmin.module.scss";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTrash, faPenToSquare, faImage, faTag, faMaximize, faCircleInfo, faFillDrip, faRecycle } from '@fortawesome/free-solid-svg-icons';

import { Table } from "antd";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function IteamAdmin() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'id',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.key - b.key,
            align: 'center',
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (image) => {
                return (
                    <>
                        <img className={cx("imgItem")} src={image} alt="" />
                    </>
                )
            },
            align: 'center'
        },
        {
            title: 'Kích thước',
            dataIndex: 'size',
            key: 'size',
            align: 'center',

        },
        {
            title: 'Mô tả',
            dataIndex: 'des',
            key: 'des',
            render: (des) => {
                return (
                    <>
                        <p className={cx("textDesItem")}>{des}</p>
                    </>
                )
            },
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (record) => {
                return (
                    <>
                        <button className={cx("btnIcon")}><FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} /></button>
                        <button className={cx("btnIcon")}><FontAwesomeIcon icon={faTrash} /></button>
                        <Link to={"/product"}><button className={cx("btnIcon")}><FontAwesomeIcon icon={faCircleInfo} /></button></Link>
                    </>
                )
            }
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Bồn cầu',
            image: '../../../img/item/toilet.png',
            size: '80cm x 100cm',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos amet optio iusto maiores deleniti nulla delectus est esse quo!',
        },
        {
            key: '2',
            name: 'Chậu rửa mặt',
            image: '../../../img/item/handWash.png',
            size: '80cm x 100cm',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos amet optio iusto maiores deleniti nulla delectus est esse quo!',
        },
        {
            key: '3',
            name: 'Router wifi',
            image: '../../../img/item/router.png',
            size: '80cm x 100cm',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos amet optio iusto maiores deleniti nulla delectus est esse quo!',
        },
        {
            key: '4',
            name: 'Quạt',
            image: '../../../img/item/wallFan.png',
            size: '80cm x 100cm',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos amet optio iusto maiores deleniti nulla delectus est esse quo!',
        }
    ];

    return (
        <div className="container">
            <div className={`${cx("titlePage")} mt-4`}>
                <h1 className={cx("title")}>Product List</h1>
                <div className="row">
                    <div className="col">
                        <div className={cx("search")}>
                            <span className={cx("inconSearch")}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7c7e83", }} /></span>
                            <input type="text" className={cx("inputSearch")} placeholder='Search...' />
                        </div>
                    </div>
                    <div className="col m-auto d-flex">
                        <div className="ms-auto">
                            <button className={cx("btnAdd")}><span style={{ fontSize: "18px" }}>Số lượng: 10</span></button>
                            <Link className="text-decoration-none" to="/itemadmin/add"><button className={cx("btnAdd")}><FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", padding: "0px 5px 0px 0px" }} />
                                <span style={{ fontSize: "18px" }}>Sản phẩm</span></button></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className={cx("contentPage")}>
                <div className="table-responsive">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
            <Modal size='lg' show={show} onHide={handleClose}>
                <form action="">
                    <Modal.Header closeButton>
                        <Modal.Title ><h1 className='text-dark m-0'>Edit</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={cx("bodyModal")}>
                        <div className="row">
                            <div className={`${cx("leftModal")} col-lg-6 col-md-5 col-sm-12`}>
                                <img className={cx("imgModal")} src="../../../img/item/handWash.png" alt="" />
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faImage} /></span>
                                    <input className={cx("inputGroup")} type="file" name="" id="" placeholder='Tên sản phẩm...' />
                                </div>
                            </div>
                            <div className={`${cx("rightModal")} col-lg-6 col-md-7 col-sm-12`}>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                    <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Tên sản phẩm...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                    <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Kích thước....' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faFillDrip} /></span>
                                    <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Màu sắc...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faRecycle} /></span>
                                    <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Chất liệu...' />
                                </div>
                                <div className={cx("group")}>
                                    <textarea className={cx("textAreaGroup")} placeholder='Mô tả' name="" id="" cols="27" rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size='lg' style={{ fontSize: "16px" }} className={cx("btnClose")} variant="secondary" onClick={handleClose}>Đóng</Button>
                        <Button size='lg' style={{ fontSize: "16px" }} variant="primary" onClick={handleClose}>Lưu thay đổi</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>

    );
}

export default IteamAdmin;