"use client";
import React, { useEffect, useRef } from "react";
import { useSearch } from "./search-context";
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const { isOpen, setIsOpen, text, setText } = useSearch();
  const router = useRouter();
  const inputRefInline = useRef<HTMLInputElement>(null);
  const inputRefBelow = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setText("");
    const startsOpen = isOpen;
    setIsOpen(!isOpen);
    if (startsOpen) return; // If closing, don't focus
    if (inputRefInline.current) {
      inputRefInline.current.focus();
    }
    if (inputRefBelow.current) {
      inputRefBelow.current.focus();
    }
  };

  useEffect(() => {
    const ctrlKTogglesSearch = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        toggleSearch();
        e.preventDefault();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push(`${process.env.NEXT_PUBLIC_URL}/searchresult/${text}`);
        setIsOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", ctrlKTogglesSearch);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleEnter);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", ctrlKTogglesSearch);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleEnter);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen, text, setText]);

  const PLACEHOLDER_TEXT = "Search...";

  return (
    <div ref={inputRef} className="flex flex-row gap-4 z-50">
      <div className="flex flex-row gap-2 items-center rounded-lg">
        <button className="hover:opacity-50 shrink-0" onClick={toggleSearch}>
          <img src="/search.svg" alt="Search Button Image" />
        </button>
        <p className=" font-bold">Ctrl + K</p>
      </div>
      {/* Medium or Above Screens (Inline) */}
      <input
        id="searchInline"
        type="text"
        ref={inputRefInline}
        placeholder={PLACEHOLDER_TEXT}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`bg-black rounded-lg border-white hidden sm:block focus:outline-none
         font-medium text-white text-lg px-2
         transition-all duration-150 ease-in-out
        ${isOpen ? "border-2 w-64" : " border-0 w-0"}
        `}
      />
      {/* Small Screens (Slide Up Input) */}
      <input
        id="searchSlideUp"
        type="text"
        ref={inputRefBelow}
        placeholder={PLACEHOLDER_TEXT}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`fixed bottom-0 left-0 bg-black rounded-lg border-white border-2 block sm:hidden w-full focus:outline-none 
         font-medium text-white text-lg h-12 px-2
         transition-all duration-150 ease-in-out
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      />
    </div>
  );
};

export default Search;
