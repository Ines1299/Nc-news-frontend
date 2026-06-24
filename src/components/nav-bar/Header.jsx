import Nav from "./Nav.jsx";
import SearchBar from "../SearchBar.jsx";
import Topics from "./Topics";
import LoggedInUserInfo from "../LoggedInUserInfo.jsx";
import { Link } from "react-router";

export default function Header({ title, pages }) {
  return (
    <header className="sticky top-0 z-10 bg-stone-50/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link to="/">
            <h1 className="font-serif text-2xl font-semibold text-stone-900">
              {title}
            </h1>
          </Link>
          <Topics />
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
