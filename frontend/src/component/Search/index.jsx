import * as React from "react";

import { SearchContainer, SearchInput } from "./index.style";

const SearchComponent = ({ disabled, value, placeHolder, onChange }) => (
  <SearchContainer>
    <SearchInput
      data-testid="search-input"
      tabIndex={1}
      type="search"
      placeholder={placeHolder || ""}
      disabled={disabled}
      value={value}
      onChange={(e) => {
        if (!!onChange) {
          onChange(e.target.value);
        }
      }}
    />
  </SearchContainer>
);

export default SearchComponent;
