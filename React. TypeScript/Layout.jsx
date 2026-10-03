import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <header>
        <h1>Movie Catalog</h1>
      </header>

      <div className="content">
        <aside>
          <nav>
            <NavLink to="/" end>
              Головна
            </NavLink>

            <NavLink to="/movies">
              Каталог фільмів
            </NavLink>

            <NavLink to="/about">
              Про проєкт
            </NavLink>
          </nav>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <p>© 2026 Movie Catalog</p>
      </footer>
    </div>
  );
}

export default Layout;