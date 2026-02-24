import Nav from "./Nav.jsx";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router";

export default function Header({ title, pages }) {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">{title}</h1>
      </Link>
      <Nav pages={pages} />
      <SearchBar />
      <img
        id="user-pic"
        src="https://friconix.com/png/fi-cnsuxx-user-circle.png"
      ></img>
    </div>
  );
}
