import "./LoadingState.css";

function LoadingState() {
  return (
    <div className="loading-state">
      <div className="loading-spinner"></div>

      <h2>Loading products...</h2>

      <p>Just a moment while we get everything ready for you.</p>
    </div>
  );
}

export default LoadingState;