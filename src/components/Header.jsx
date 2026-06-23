import Nav from "./Nav.jsx";
import SearchBar from "./SearchBar.jsx";
import LoggedInUserInfo from "./LoggedInUserInfo";
import { Link } from "react-router";
import SideMenu from "./SideMenu";

export default function Header({ title, pages }) {
  return (
    <header className="sticky top-0 z-10 bg-stone-50/95 backdrop-blur border-b border-stone-200">
      <div className="max-2-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link to="/">
            <h1 className="font-serif text-2xl font-semibold text-stone-900">
              {title}
            </h1>
          </Link>

          <Nav pages={pages} />
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Link to="/user">
            <LoggedInUserInfo />
          </Link>
        </div>
      </div>
    </header>
  );
}
