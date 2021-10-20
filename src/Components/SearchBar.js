import React from "react";
// Styling

const SearchBar = (props) => {
  return (
    <>
      <input
        className="searchBar form-control"
        onChange={(event) => props.setQuery(event.target.value)}
        placeholder="Search for a Jam3ya name"
      />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={(event) => props.setIsCheckboxChecked(event.target.checked)}
        />
        <label
          className="form-check-label text-halloween"
          for="flexCheckDefault"
        >
          Show jam3yat that hasn't started.
        </label>
      </div>
    </>
  );
};

export default SearchBar;
