import "./Product.scss";
import sneaker1 from "../../assets/images/sneaker1.webp";
import sneaker2 from "../../assets/images/sneaker2.webp";
import sneaker3 from "../../assets/images/sneaker3.webp";
import sneaker4 from "../../assets/images/sneaker4.webp";
import { useState } from "react";

function Product() {
  const [currentImg, setCurrentImg] = useState(sneaker1);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img src={currentImg} onClick={() => setIsOpen(true)} />
          </div>
          <div className="img-down">
            <div className="img-small">
              <img src={sneaker1} onClick={() => setCurrentImg(sneaker1)} />
            </div>
            <div className="img-small">
              <img src={sneaker2} onClick={() => setCurrentImg(sneaker2)} />
            </div>
            <div className="img-small">
              <img src={sneaker3} onClick={() => setCurrentImg(sneaker3)} />
            </div>
            <div className="img-small">
              <img src={sneaker4} onClick={() => setCurrentImg(sneaker4)} />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Giày chạy bộ New Balance - M860E11</div>
          <div className="price">369.500.000đ</div>
          <div className="size">Size: 42</div>
          <div className="action">
            <label className="quantity">Số lượng:</label>
            <input type="number" min={1} value={1} />
            <button className="buy">Chọn mua</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
