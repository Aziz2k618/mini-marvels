import "./Shop.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import { useSearchParams } from "react-router-dom";
import { FiGrid, FiEdit3, FiBox } from "react-icons/fi";
import EmptyState from "../../components/EmptyState/EmptyState";


function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";
  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    activeCategory === "All" ||
    product.category === activeCategory;

  const matchesSearch =
    !searchQuery ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
  });
  return (
    <main className="shop">

      <section className="shop-header">
        <span>OUR COLLECTION</span>

        <h1>
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : "Shop Everything"}
        </h1>

        <p>
          {searchQuery
            ? `Showing products matching your search.`
            : "Explore our collection of creative stationery and playful toys made for little imaginations."}
        </p>
      </section>

      <section className="shop-products">
      {!searchQuery && (
        <div className="shop-filters">
          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setSearchParams({})}
          >
            <FiGrid />
            <span>All</span>
          </button>

          <button
            className={activeCategory === "Stationery" ? "active" : ""}
            onClick={() => setSearchParams({ category: "Stationery" })}
          >
            <FiEdit3 />
            <span>Stationery</span>
          </button>

          <button
            className={activeCategory === "Toys" ? "active" : ""}
            onClick={() => setSearchParams({ category: "Toys" })}
          >
            <FiBox />
            <span>Toys</span>
        </button>
        </div>
      )}

        <div className="shop-product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                link={product.link}
              />
            ))
          ) : (
            <EmptyState
              title="No products found"
              message="We couldn't find anything matching your search. Try another product name or category."
              buttonText="View All Products"
              buttonLink="/shop"
            />
          )}
      </div>

      </section>

    </main>
  );
}

export default Shop;