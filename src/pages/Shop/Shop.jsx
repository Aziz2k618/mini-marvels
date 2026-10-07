import "./Shop.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import { useSearchParams } from "react-router-dom";


function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  const filteredProducts =
  activeCategory === "All"
    ? products
    : products.filter(
        (product) => product.category === activeCategory
      );
  return (
    <main className="shop">

      <section className="shop-header">
        <span>OUR COLLECTION</span>

        <h1>Shop Everything</h1>

        <p>
          Explore our collection of creative stationery and playful toys
          made for little imaginations.
        </p>
      </section>

      <section className="shop-products">

        <div className="shop-filters">
          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setSearchParams({})}
          >
            All
          </button>

          <button
            className={activeCategory === "Stationery" ? "active" : ""}
            onClick={() => setSearchParams({ category: "Stationery" })}
          >
            Stationery
          </button>

          <button
            className={activeCategory === "Toys" ? "active" : ""}
            onClick={() => setSearchParams({ category: "Toys" })}
          >
            Toys
          </button>
        </div>

        <div className="shop-product-grid">
          {filteredProducts.map((product) => (
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

export default Shop;