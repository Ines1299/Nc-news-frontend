import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <div className="search">
        <input
          id="search-input"
          type="text"
          className="search-bar"
          placeholder="Find what you're looking for here ..."
        ></input>
        <Search className="search-symbol" />
      </div>
    </>
  );
}
