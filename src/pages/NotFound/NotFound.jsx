import { Link } from "react-router-dom";
import "./NotFound.css";
import { SearchX } from "lucide-react";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <span className="not-found-label">OOPS!</span>

        <div className="not-found-icon">
          <SearchX size={42} strokeWidth={1.7} />
        </div>

        <h1>404</h1>

        <h2>Looks like this page went missing.</h2>

        <p>
          The page you're looking for doesn't exist or may have moved.
          Let's get you back to exploring Mini Marvels.
        </p>

        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;