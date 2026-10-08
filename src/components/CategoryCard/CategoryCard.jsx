import { Link } from "react-router-dom";

import "./CategoryCard.css";

function CategoryCard({
  title,
  description,
  image,
  link,
  icon: Icon,
}) {
  return (
    <Link to={link} className="category-card">
      <div className={`category-image ${title.toLowerCase()}`}>
        <img src={image} alt={title} />
      </div>

      <div className="category-content">

        <div className="category-title">
          <div className="category-icon">
            <Icon size={20} strokeWidth={2} />
          </div>

          <h3>{title}</h3>
        </div>

        <p>{description}</p>

        <span>
          Explore
          <span className="category-arrow">→</span>
        </span>

      </div>
    </Link>
  );
}

export default CategoryCard;