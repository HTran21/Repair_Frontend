import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTrash, faPenToSquare, faImage, faTag, faMaximize, faToolbox } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AddProduct() {

    // let profileImg = document.getElementById("imageDefault");
    // let inputFile = document.getElementById("inputFile");

    const [imageUpload, setImageUpload] = useState("../../../img/icon/imageIcon.png")

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageUpload(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div className="container">
            <div className={`${cx("contentPage")} mt-4`}>
                <h1 className={cx("title")}>Add Product</h1>
                <div className="row">
                    <div className="col">
                        <div className={cx("addImage")}>
                            <h2>Add Image</h2>
                            {
                                imageUpload && (
                                    <div className={cx("frameImg")}>
                                        <img className={cx("imgProduct")} src={imageUpload} alt="" id="imageDefault" />
                                    </div>
                                )
                            }
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faImage} /></span>
                                <input className={cx("inputGroup")} onChange={onImageChange} accept="image/jpeg, image/png, image/jpg" type="file" name="" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("addInfo")}>
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Tên sản phẩm...' />
                            </div>
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Kích thước....' />
                            </div>
                            <div className={cx("group")}>
                                <textarea className={cx("textAreaGroup")} placeholder='Mô tả' name="" id="" cols="30" rows="8"></textarea>
                            </div>
                            <button className={cx("btnAddProduct")}>Thêm sản phẩm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;