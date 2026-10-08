import { useParams } from "react-router-dom";

import products from "../../data/products";

import "./ProductDetails.css";

import ProductCard from "../../components/ProductCard/ProductCard";

import { FiTag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find(
    (product) => product.link === `/product/${slug}`
  );

  const relatedProducts = products.filter(
  (item) =>
    item.category === product?.category &&
    item.id !== product?.id
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
       <div className="product-details-category">
        <FiTag />
        <span>{product.category}</span>
      </div>

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
        Category: ${product.category}
        Product Link: ${window.location.href}

        Please let me know the next steps. Thank you!`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp />
          <span>ORDER ON WHATSAPP</span>
        </a>
      </div>
            

      <section className="related-products">
        <div className="related-products-header">
          <span>KEEP EXPLORING</span>
          <h2>You may also like</h2>
        </div>

        <div className="related-products-grid">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
    

export default ProductDetails;