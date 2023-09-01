export default function Sorting({
  sortBy,
  setSortBy,
  sortCriteria,
  setSortCriteria,
}) {
  const sortByNameClicked = () => {
    if (sortBy === "name") {
      updateSortCriteria();
    } else {
      setSortBy("name");
      setSortCriteria("asc");
    }
  };

  const sortByPriceClicked = () => {
    if (sortBy === "price") {
      updateSortCriteria();
    } else {
      setSortBy("price");
      setSortCriteria("asc");
    }
  };

  const updateSortCriteria = () => {
    if (sortCriteria === "asc") {
      setSortCriteria("desc");
    } else {
      setSortCriteria("asc");
    }
  };

  return (
    <div className="sort">
      <label className="label">Sort by:</label>
      <button
        className={sortBy == "name" ? "bold-text" : "simple-text"}
        onClick={sortByNameClicked}
      >
        Name
      </button>
      <button
        className={sortBy == "price" ? "bold-text" : "simple-text"}
        onClick={sortByPriceClicked}
      >
        Price
      </button>
    </div>
  );
}
