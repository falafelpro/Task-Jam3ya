import React from "react";
// Styling

const SearchBar = (props) => {
  return (
    <>
      <input
        className="searchBar form-control"
        onChange={(event) => props.setQuery(event.target.value)}
        placeholder="Search for a cookie name"
      />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={(event) => props.setIsCheckboxChecked(event.target.checked)}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Show jam3yat that hasnt started.
        </label>
      </div>
    </>
  );
};

export default SearchBar;
