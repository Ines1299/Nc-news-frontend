const sortOptions = [
  { label: "Newest", sort_by: "created_at", order: "DESC" },
  { label: "Oldest", sort_by: "created_at", order: "ASC" },
  { label: "Most Votes", sort_by: "votes", order: "DESC" },
  { label: "Least Votes", sort_by: "votes", order: "ASC" },
  { label: "Title A-Z", sort_by: "title", order: "ASC" },
  { label: "Title Z-A", sort_by: "title", order: "DESC" },
];

export default function SortButton({ sortBy, order, onSortChange }) {
  const currentIndex = sortOptions.findIndex(
    (opt) => opt.sort_by === sortBy && opt.order === order,
  );
  const handleChange = (e) => {
    const selected = sortOptions[e.target.value];
    onSortChange(selected.sort_by, selected.order);
  };

  return (
    <select id="sort-button" value={currentIndex} onChange={handleChange}>
      {sortOptions.map((opt, index) => (
        <option key={opt.label} value={index}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
