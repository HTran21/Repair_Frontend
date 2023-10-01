import { Space, Table, Tag } from 'antd';
import classNames from 'classnames/bind';
import styles from './Test.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

import toast, { Toaster } from 'react-hot-toast';

const cx = classNames.bind(styles);

function Test() {

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
        </div>
    );
}

export default Test;
<div>

</div>