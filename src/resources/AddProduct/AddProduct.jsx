import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTag, faMaximize, faFillDrip, faRecycle } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import toast from "react-hot-toast";

const cx = classNames.bind(styles);

function AddProduct() {

    const [imageUpload, setImageUpload] = useState("../../../img/icon/imageIcon.png")



    // const [values, setValues] = useState({
    //     imageItem: '',
    //     nameItem: '',
    //     sizeItem: '',
    //     colorItem: '',
    //     chatlieu: '',
    //     desItem: ''
    // })


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageUpload(URL.createObjectURL(event.target.files[0]));
        }
    }

    // const handleInput = (e) => {

    // if (e.target.files && e.target.files[0]) {
    //     setImageUpload(URL.createObjectURL(e.target.files[0]));

    // }
    //     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    // }

    const [file, setFile] = useState();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/product/add', imageItem)
    //     // .then(res => {
    //     //     console.log(res);
    //     // })
    //     // .catch(err => console.log(err));
    // }
    const [nameItem, setNameItem] = useState();
    const [sizeItem, setSizeItem] = useState();
    const [colorItem, setColorItem] = useState();
    const [chatlieu, setChatLieu] = useState();
    const [desItem, setDesItem] = useState();

    const upload = () => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('nameItem', nameItem)
        formData.append('sizeItem', sizeItem)
        formData.append('colorItem', colorItem)
        formData.append('chatlieu', chatlieu)
        formData.append('desItem', desItem)
        axios.post('http://localhost:3000/product/add', formData)
            .then(res => {
                console.log(res)
                // if (res.data.error) {
                //     toast.error(res.data.error);
                // } else {
                //     toast.success(res.data.message);
                // }
            })
            .catch(er => console.log(er))
    }

    // console.log(imageItem);
    return (
        <div className="container">
            <div className={`${cx("contentPage")} mt-4`}>
                <h1 className={cx("title")}>Add Product</h1>
                <form action="" encType="multipart/form-data">
                    <div className="row">
                        <div className="col">
                            <div className={cx("addImage")}>
                                <h2 className="mt-2 mb-3">Hình ảnh sản phẩm</h2>
                                {
                                    imageUpload && (
                                        <div className={cx("frameImg")}>
                                            <img className={cx("imgProduct")} src={imageUpload} alt="" id="imageDefault" />
                                        </div>
                                    )
                                }
                                <div className={`${cx("group")} mt-4 mb-3`}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faImage} /></span>
                                    <input className={cx("inputGroup")} accept="image/jpeg, image/png, image/jpg" type="file" name="imageItem"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setImageUpload(URL.createObjectURL(e.target.files[0]));

                                            }
                                            setFile(e.target.files[0])
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx("addInfo")}>
                                <h2 className="mt-2 mb-3">Thông tin sản phẩm</h2>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                    <input className={cx("inputGroup")} type="text" name="nameItem"
                                        onChange={e =>
                                            setNameItem(e.target.value)
                                        } value={nameItem} id="" placeholder='Tên sản phẩm...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                    <input className={cx("inputGroup")} type="text" name="sizeItem"
                                        onChange={e => setSizeItem(e.target.value)} value={sizeItem} id="" placeholder='Kích thước...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faFillDrip} /></span>
                                    <input className={cx("inputGroup")} type="text" value={colorItem}
                                        onChange={e => setColorItem(e.target.value)} name="colorItem" id="" placeholder='Màu sắc...' />
                                </div>
                                <div className={cx("group")}>
                                    <span><FontAwesomeIcon className={cx("iconInput")} icon={faRecycle} /></span>
                                    <input className={cx("inputGroup")} type="text" name="chatlieu"
                                        onChange={e => setChatLieu(e.target.value)} value={chatlieu} id="" placeholder='Chất liệu...' />
                                </div>
                                <div className={`${cx("group")} mb-1`}>
                                    <textarea className={cx("textAreaGroup")} placeholder='Mô tả cơ sở vật chất' name="desItem"
                                        onChange={e => setDesItem(e.target.value)} id="" cols="30" rows="8" spellCheck="false" value={desItem}></textarea>
                                </div>

                            </div>
                            <button type="button" onClick={upload} className={`${cx("btnAddProduct")} ms-auto`}>Thêm thiết bị</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;