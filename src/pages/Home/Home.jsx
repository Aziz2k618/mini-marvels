import "./Home.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import heroImage from "../../assets/hero-image.png";


function Home() {
  return (
    <main className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-label">WELCOME TO MINI MARVELS</span>

          <h1>
            Everything Kids Love,
            <span> All in One Place.</span>
          </h1>

          <p>
            Fun toys, creative stationery, and little essentials made for big
            imaginations.
          </p>

          <div className="hero-buttons">
            <a href="/shop" className="hero-button primary">
              Shop Now
            </a>

            <a href="/toys" className="hero-button secondary">
              Explore Toys
            </a>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="section-heading">
          <span>EXPLORE OUR COLLECTION</span>
          <h2>Pick Your Favorite</h2>
          <p>
            From creative stationery to playful toys, find something
            special for every little imagination.
          </p>
        </div>

        <div className="category-grid">
          <CategoryCard
            title="Stationery"
            description="Creative supplies for drawing, writing, learning, and making."
            image="src/assets/Stationary-image.jpg"
            link="/stationery"
          />

          <CategoryCard
            title="Toys"
            description="Fun and engaging toys made for play, discovery, and imagination."
            image="src\assets\toys-image.jpg"
            link="/toys"
          />
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <span>OUR FAVORITES</span>
          <h2>Little Favorites</h2>
          <p>
            A few things kids love for learning, creating, and playing.
          </p>
        </div>

        <div className="product-grid">
          <ProductCard
            name="Color Pencil Set"
            price="450"
            category="Stationery"
            image="src/assets/products/P1.jpg"
            link="/product/color-pencil-set"
          />

          <ProductCard
            name="Creative Notebook"
            price="550"
            category="Stationery"
            image="src/assets/products/P2.jpg"
            link="/product/creative-notebook"
          />

          <ProductCard
            name="Wooden Building Blocks"
            price="1,200"
            category="Toys"
            image="src/assets/products/P3.jpg"
            link="/product/wooden-building-blocks"
          />

          <ProductCard
            name="Wooden Rainbow"
            price="950"
            category="Toys"
            image="src/assets/products/P4.jpg"
            link="/product/wooden-rainbow"
          />
        </div>
        <div className="view-all-products">
          <a href="/shop">View All Products →</a>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-content">
          <span>WHY MINI MARVELS</span>

          <h2>Made for Little Moments.</h2>

          <p>
            From the first sketch to hours of imaginative play, Mini Marvels
            brings together things that make everyday moments more creative,
            playful, and memorable.
          </p>

          <a href="/about" className="brand-button">
            Discover Our Story →
          </a>
        </div>

        <div className="brand-highlights">
          <div className="highlight-card">
            <span>01</span>
            <h3>Creative</h3>
            <p>Supplies that encourage kids to create and explore.</p>
          </div>

          <div className="highlight-card">
            <span>02</span>
            <h3>Playful</h3>
            <p>Toys that turn everyday play into little adventures.</p>
          </div>

          <div className="highlight-card">
            <span>03</span>
            <h3>For Kids</h3>
            <p>Fun finds selected with curious young minds in mind.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-content">
          <span>READY TO EXPLORE?</span>

          <h2>Find Something They'll Love.</h2>

          <p>
            Discover creative stationery and playful toys made for little
            imaginations.
          </p>

          <a href="/shop" className="final-cta-button">
            Shop Everything →
          </a>
        </div>
      </section>


    </main>
  );
}

export default Home;