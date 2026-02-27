import Nav from "./Nav.jsx";
import SearchBar from "./SearchBar.jsx";
import LoggedInUserInfo from "./LoggedInUserInfo";
import { Link } from "react-router";
import SideMenu from "./SideMenu";

export default function Header({ title, pages, children }) {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <h1 className="title">{title}</h1>
        </Link>

        <Nav pages={pages} />
      </div>
      <div className="header-right">
        <SearchBar />
        <SideMenu />
        <Link to="/user">
          <LoggedInUserInfo />
        </Link>
      </div>
    </div>
  );
}
