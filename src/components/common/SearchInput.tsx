import React, { useState, useEffect } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length >= 3) {
      onSearch(query);
    } else {
      onSearch("");
    }
  }, [query, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="p-2 border border-gray-300 w-full h-[2.3rem] shadow-lg"
    />
  );
};

export default SearchInput;
