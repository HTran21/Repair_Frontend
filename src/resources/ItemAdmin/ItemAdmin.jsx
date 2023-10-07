import classNames from "classnames/bind";
import styles from "./ItemAdmin.module.scss";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTrash, faPenToSquare, faImage, faTag, faMaximize, faCircleInfo, faFillDrip, faRecycle } from '@fortawesome/free-solid-svg-icons';

import { Table } from "antd";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from "react-router-dom";

import axios from "axios";

const cx = classNames.bind(styles);

function IteamAdmin() {

    const [show, setShow] = useState(false);
    const [recordView, setRecordView] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleView = (data) => {
        setShow(true)
        setRecordView(data)
    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'ID_item',
            key: 'id',
            render: (text, object, index) => { return index + 1 },
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.key - b.key,
            align: 'center',
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'nameItem',
            key: 'nameItem',
            align: 'center'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'imageItem',
            key: 'imageItem',
            render: (imageItem) => {
                return (
                    <>
                        <img className={cx("imgItem")} src={`http://localhost:3000/${imageItem}`} alt="" />
                    </>
                )
            },
            align: 'center'
        },
        {
            title: 'Kích thước',
            dataIndex: 'sizeItem',
            key: 'sizeItem',
            align: 'center',

        },
        {
            title: 'Mô tả',
            dataIndex: 'desItem',
            key: 'desItem',
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
                        <Link to={`/updateitem/${record.ID_item}`}> <button className={cx("btnIcon")}><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
                        <button className={cx("btnIcon")}><FontAwesomeIcon icon={faTrash} /></button>
                        <button className={cx("btnIcon")}><FontAwesomeIcon icon={faCircleInfo} onClick={() => handleView(record)} /></button>
                    </>
                )
            }
        },
    ];

    const [data, setData] = useState();
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setTotalPages(data.totalPages);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="container min-vh-100">
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
                            <button className={cx("btnAdd")}><span style={{ fontSize: "18px" }}>Số lượng: {data?.length}</span></button>
                            <Link className="text-decoration-none" to="/itemadmin/add"><button className={cx("btnAdd")}><FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", padding: "0px 5px 0px 0px" }} />
                                <span style={{ fontSize: "18px" }}>Sản phẩm</span></button></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className={cx("contentPage")}>
                <div className="table-responsive">
                    <Table
                        rowKey="ID_item"
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            pageSize: 4,
                            total: totalPages,
                        }} />
                </div>
            </div>
            <Modal size='lg' show={show} onHide={handleClose}>
                <form action="" encType="multipart/form-data">
                    <Modal.Header closeButton>
                        <Modal.Title ><h1 className='text-dark m-0'>Thông tin chi tiết</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={cx("bodyModal")}>
                        <div className="row">
                            {/* <h1 className="text-dark">?????? : {recordView?.nameItem}</h1> */}

                            <div className={`${cx("leftModal")} col-lg-6 col-md-5 col-sm-12`}>
                                <img className={cx("imgModal")} src={`http://localhost:3000/${recordView?.imageItem}`} alt="" />
                            </div>
                            <div className={`${cx("rightModal")} col-lg-6 col-md-7 col-sm-12`}>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                    {/* <input className={cx("inputGroup")} type="text" value={recordView?.nameItem || ""} onChange={e => setRecordView(e.target.value)}
                                        name="nameItem" id="" placeholder='Tên sản phẩm...' /> */}
                                    <input className={cx("inputGroup")} type="text" value={recordView?.nameItem}
                                        onChange={e => setNameItem(e.target.value)} name="nameItem" id="" placeholder='Tên sản phẩm...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                    <input className={cx("inputGroup")} type="text" value={recordView?.sizeItem}
                                        onChange={e => setSizeItem(e.target.value)} name="sizeItem" id="" placeholder='Kích thước....' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faFillDrip} /></span>
                                    <input className={cx("inputGroup")} type="text" value={recordView?.colorItem}
                                        onChange={e => setColor(e.target.value)} name="colorItem" id="" placeholder='Màu sắc...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faRecycle} /></span>
                                    <input className={cx("inputGroup")} type="text" value={recordView?.chatlieu}
                                        onChange={e => setChatLieu(e.target.value)} name="chatlieu" id="" placeholder='Chất liệu...' />
                                </div>
                                <div className={cx("group")}>
                                    <textarea className={cx("textAreaGroup")} placeholder='Mô tả' value={recordView?.desItem}
                                        onChange={e => setDesItem(e.target.value)} name="desItem" id="" cols="27" rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size='lg' style={{ fontSize: "16px" }} className={cx("btnClose")} variant="secondary" onClick={handleClose}>Đóng</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >

    );
}

export default IteamAdmin;