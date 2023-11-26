import classNames from "classnames/bind";
import styles from "./UpdateItem.module.scss";

import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTag, faMaximize, faFillDrip, faRecycle } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import toast from "react-hot-toast";

const cx = classNames.bind(styles);

function UpdateItem() {

    const { id } = useParams();
    const [data, setData] = useState()
    const [nameItem, setNameItem] = useState('');
    const [sizeItem, setSizeItem] = useState('');
    const [colorItem, setColorItem] = useState('');
    const [chatlieu, setChatLieu] = useState('');
    const [desItem, setDesItem] = useState('');
    const [imageItem, setImageItem] = useState()

    const [imageUpload, setImageUpload] = useState('')


    useEffect(() => {
        const getData = () => {
            setNameItem(data?.nameItem)
            setSizeItem(data?.sizeItem)
            setColorItem(data?.colorItem)
            setChatLieu(data?.chatlieu)
            setDesItem(data?.desItem)
            setImageItem(data?.imageItem)
            setImageUpload(`http://localhost:3000/${data?.imageItem}`)
        }


        getData();
    }, [data])

    useEffect(() => {
        axios.get('http://localhost:3000/product/update/' + id)
            .then(res => {
                if (res && res.data[0] && res.data[0].ID_item) {
                    setData(res.data[0])
                }


            })
            .catch(err => console.log(err))

    }, [])



    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageUpload(URL.createObjectURL(event.target.files[0]));
        }
    }

    const [file, setFile] = useState();


    // console.log(nameItem)



    const upload = () => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('nameItem', nameItem)
        formData.append('sizeItem', sizeItem)
        formData.append('colorItem', colorItem)
        formData.append('chatlieu', chatlieu)
        formData.append('desItem', desItem)
        axios.put('http://localhost:3000/product/update/' + id, formData)
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error);
                } else {
                    toast.success(res.data.message);
                }
            })
            .catch(er => console.log(er))
    }

    // const upload = (event) => {
    //     event.preventDefault();
    //     axios.put('http://localhost:3000/product/update/' + id, { nameItem, sizeItem, colorItem, chatlieu, desItem })
    //         .then(res => {
    //             console.log(res.data)
    //         }).catch(err => console.log(err))
    // }

    // const upload = async (e) => {
    //     e.preventDefault()
    //     // console.log("nameitem", nameItem)
    //     const formData = new FormData();
    //     formData.append('nameItem', nameItem);

    //     for (var pair of formData.entries()) {
    //         console.log(pair[0] + ', ' + pair[1]);
    //     }

    //     await axios.put('http://localhost:3000/product/update/' + id, formData)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        <div className="container">

            <div className={`${cx("contentPage")} mt-4`}>
                <h1 className={cx("title")}>Chỉnh sửa thiết bị</h1>
                <form action="">
                    <div className="row">
                        <div className="col mt-1">
                            <div className={cx("addImage")}>
                                <h2 className="mt-2 mb-3">Hình ảnh sản phẩm</h2>
                                {
                                    imageUpload && (
                                        <label htmlFor="uploadImage" className={cx("frameImg")}>
                                            <img className={cx("imgProduct")} src={imageUpload} alt="" id="imageDefault" />
                                        </label>
                                    )
                                }
                                <div className={`${cx("group")} mt-4 mb-3`}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faImage} /></span>
                                    <input id="uploadImage" className={cx("inputGroup", 'd-none')} accept="image/jpeg, image/png, image/jpg" type="file" name="imageItem"
                                        defaultValue={imageItem || ""} onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setImageUpload(URL.createObjectURL(e.target.files[0]));

                                            }
                                            setFile(e.target.files[0])
                                            setImageItem(e.target.files[0].name)
                                        }} />
                                    <input className={cx("inputGroup")} disabled type="text" defaultValue={imageItem || ''} name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className="col mt-1">
                            <div className={cx("addInfo")}>
                                <h2 className="mt-2 mb-3">Thông tin sản phẩm</h2>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                    <input className={cx("inputGroup")} type="text" name="nameItem"
                                        value={nameItem || ""} onChange={e => setNameItem(e.target.value)} id="" placeholder='Tên sản phẩm...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                    <input className={cx("inputGroup")} type="text" name="sizeItem"
                                        value={sizeItem || ''} onChange={e => setSizeItem(e.target.value)} id="" placeholder='Kích thước...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faFillDrip} /></span>
                                    <input className={cx("inputGroup")} type="text"
                                        value={colorItem || ''} onChange={e => setColorItem(e.target.value)} name="colorItem" id="" placeholder='Màu sắc...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faRecycle} /></span>
                                    <input className={cx("inputGroup")} type="text" name="chatlieu"
                                        value={chatlieu || ''} onChange={e => setChatLieu(e.target.value)} id="" placeholder='Chất liệu...' />
                                </div>
                                <div className={`${cx("group")} mb-1`}>
                                    <textarea className={cx("textAreaGroup")} placeholder='Mô tả cơ sở vật chất' name="desItem"
                                        value={desItem || ''} onChange={e => setDesItem(e.target.value)} id="" cols="30" rows="8" spellCheck="false" ></textarea>
                                </div>

                            </div>
                            <button type="button" onClick={upload} className={`${cx("btnAddProduct")} ms-auto`}>Cập nhật thiết bị</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateItem;