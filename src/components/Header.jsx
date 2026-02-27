import Nav from "./Nav.jsx";
import SearchBar from "./SearchBar.jsx";
import LoggedInUserInfo from "./LoggedInUserInfo";
import { Link } from "react-router";

export default function Header({ title, pages }) {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">{title}</h1>
      </Link>
      <Nav pages={pages} />
      <SearchBar />
      <Link to="/user">
        <LoggedInUserInfo />
      </Link>
    </div>
  );
}
