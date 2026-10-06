import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find(
    (product) => product.link === `/product/${slug}`
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main className="product-details">
      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-info">
        <p className="product-details-category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <p className="product-details-price">
          Rs. {product.price}
        </p>

         <p className="product-details-description">
          {product.description}
        </p>

        

        <a
      href={`https://wa.me/?text=${encodeURIComponent(
        `Hi Mini Marvels! I'd like to order:

    Product: ${product.name}
    Price: Rs. ${product.price}
    Product Link: ${window.location.href}`
      )}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
    >
      ORDER ON WHATSAPP
    </a>
      </div>
    </main>
  );
}

export default ProductDetails;