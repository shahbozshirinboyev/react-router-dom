import { NavLink, Outlet } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";

function RootLayout() {
  return (
    <>
      <nav>
        <h1>My Website</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <BreadCrumps />

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}

export default RootLayout;
