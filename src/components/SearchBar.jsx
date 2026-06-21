import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.trim()) {
      navigate(`/?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/");
    }
  };
  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        id="search-input"
        type="text"
        className="search-bar"
        placeholder="Find what you're looking for here ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="search-symbol" aria-label="Search">
        <Search />
      </button>
    </form>
  );
}
