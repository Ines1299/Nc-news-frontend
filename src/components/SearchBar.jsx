import { Search, X } from "lucide-react";
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

  const handleClear = () => {
    setValue("");
    navigate("/");
  };

  return (
    <form
      className="search flex items-center gap-2 bg-white border border-stone-200 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-indigo-200 focus-within:border-indigo-400 transition-all"
      onSubmit={handleSearch}
    >
      <Search size={15} className="text-stone-400 shrink-0" />
      <input
        id="search-input"
        type="text"
        autoComplete="off"
        className="search-bar bg-transparent text-sm text-stone-800 placeholder:text-stone-400 outline-none w-40 sm:w-56"
        placeholder="Find any article here ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="search-symbol text-stone-400 hover:text-stone-600 transition-colors"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </form>
  );
}
