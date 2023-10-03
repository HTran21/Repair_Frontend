import classNames from "classnames/bind";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className="container">
            <div className={cx("productPage")}>
                <div className="row">
                    <div className="col-lg-5 p-0">
                        <div className={cx("imgProduct")}>
                            <div className={cx("aroundImg")}>
                                <img className={cx("imgItem")} src="../../../img/item/toilet.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-7 p-0">
                        <div className={cx("infoProduct")}>
                            <h3>Sản phẩm</h3>
                            <div className={cx("contentProduct")}>
                                <h1 className="text-dark mt-1 mb-4">Bồn cầu</h1>
                                <span>Màu sắc: </span><div className={cx("iconColor")}></div>
                                <p className="mt-2">Kích thước: 150cm x 70cm</p>
                                <p>Vật liệu: Sứ</p>
                                <div className={cx("desItem")}><p className="mb-0">Mô tả:</p>
                                    <p className="ps-2" style={{ fontWeight: "500" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque mollitia sapiente sed repellat vitae qui consectetur veritatis. Illum voluptates fuga nesciunt magni placeat tempora aliquam aut? Commodi, et accusantium?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;