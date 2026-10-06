
import { Link } from "react-router-dom";
import "./ProductCard.css";


function ProductCard({ name, price, category, image, link }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>

        <h3>{name}</h3>

        <p className="product-price">Rs. {price}</p>

        <Link to={link} className="product-button">
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;