"use client";
import React from "react";

const SearchButton: React.FC = () => {
  return (
    <button
      className="hover:opacity-50 shrink-0"
      onClick={() => console.log("search")}
    >
      <img src="/search.svg" alt="Search Button Image" />
    </button>
  );
};

export default SearchButton;
