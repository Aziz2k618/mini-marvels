import "./CategoryCard.css";

function CategoryCard({ title, description, image, link }) {
  return (
    <a href={link} className="category-card">
      <div className={`category-image ${title.toLowerCase()}`}>
        <img src={image} alt={title} />
      </div>

      <div className="category-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Explore →</span>
      </div>
    </a>
  );
}

export default CategoryCard;