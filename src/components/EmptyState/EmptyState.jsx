import { Link } from "react-router-dom";
import "./EmptyState.css";

function EmptyState({
  title = "Nothing here yet",
  message = "We couldn't find anything to show right now.",
  buttonText = "Back to Shop",
  buttonLink = "/shop",
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">✦</div>

      <h2>{title}</h2>

      <p>{message}</p>

      <Link to={buttonLink} className="empty-state-button">
        {buttonText}
      </Link>
    </div>
  );
}

export default EmptyState;