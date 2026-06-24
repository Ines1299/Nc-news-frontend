import { Link } from "react-router";

export default function Nav({ pages }) {
  return (
    <nav className="nav">
      <ul>
        {pages.map((page) => {
          return (
            <li key={page.path}>
              <Link className="nav-items" to={page.path}>
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
