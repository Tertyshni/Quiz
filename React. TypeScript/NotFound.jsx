import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h2>404</h2>
      <p>Такої сторінки не існує.</p>

      <Link to="/">Повернутися на головну</Link>
    </section>
  );
}

export default NotFound;