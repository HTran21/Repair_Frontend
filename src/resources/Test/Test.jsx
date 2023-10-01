import { Space, Table, Tag } from 'antd';
import classNames from 'classnames/bind';
import styles from './Test.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faTag, faMaximize, faImage } from '@fortawesome/free-solid-svg-icons'

import toast, { Toaster } from 'react-hot-toast';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const cx = classNames.bind(styles);

function Test() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const notify = () => toast.success('Successfully created!', {
        duration: 4000,
        position: 'top-right'
    });

    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'id',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.key - b.key,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (record) => {
                return (
                    <>
                        <button className={cx("btnIcon")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className={cx("btnIcon")}><FontAwesomeIcon icon={faTrash} /></button>
                    </>
                )
            }
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];


    return (
        <div className="container">
            <div className={cx("test")}>
                <Table className={cx("table")} columns={columns} dataSource={data} />
            </div>

            <button onClick={notify}>Make me a toast</button>
            <Toaster />

            {/* Modal */}
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

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
                                    <textarea className={cx("textAreaGroup")} placeholder='Mô tả' name="" id="" cols="27" rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size='lg' style={{ fontSize: "18px" }} className={cx("btnClose")} variant="secondary" onClick={handleClose}>Đóng</Button>
                        <Button size='lg' style={{ fontSize: "18px" }} variant="primary" onClick={handleClose}>Lưu thay đổi</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default Test;
<div>

</div>