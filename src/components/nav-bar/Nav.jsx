import { Link } from "react-router";

export default function Nav({ pages }) {
  return (
    <nav className="nav">
      <ul className="flex items-center gap-1">
        {pages.map((page) => {
          return (
            <li key={page.path}>
              <Link
                className="px-3 py-1.5 rounded-full text-xs font-medium text-stone600 hover:bg-stone-100 hover:text-stone-900 transition-colors"
                to={page.path}
              >
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
