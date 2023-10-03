import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTag, faMaximize, faFillDrip, faRecycle } from '@fortawesome/free-solid-svg-icons';

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
                                <input className={cx("inputGroup")} onChange={onImageChange} accept="image/jpeg, image/png, image/jpg" type="file" name="" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={cx("addInfo")}>
                            <h2 className="mt-2 mb-3">Thông tin sản phẩm</h2>
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faTag} /></span>
                                <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Tên sản phẩm...' />
                            </div>
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faMaximize} /></span>
                                <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Kích thước...' />
                            </div>
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faFillDrip} /></span>
                                <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Màu sắc...' />
                            </div>
                            <div className={cx("group")}>
                                <span><FontAwesomeIcon className={cx("iconInput")} icon={faRecycle} /></span>
                                <input className={cx("inputGroup")} type="text" name="" id="" placeholder='Chất liệu...' />
                            </div>
                            <div className={`${cx("group")} mb-1`}>
                                <textarea className={cx("textAreaGroup")} placeholder='Mô tả' name="" id="" cols="30" rows="8"></textarea>
                            </div>

                        </div>
                        <button className={`${cx("btnAddProduct")} ms-auto`}>Thêm sản phẩm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;