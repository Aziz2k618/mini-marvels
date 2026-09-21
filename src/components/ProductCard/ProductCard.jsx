import "./ProductCard.css";

function ProductCard({ name, price, image, category, link }) {
  return (
    <a href={link} className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <span>{category}</span>
        <h3>{name}</h3>
        <p>Rs. {price}</p>
      </div>
    </a>
  );
}

export default ProductCard;