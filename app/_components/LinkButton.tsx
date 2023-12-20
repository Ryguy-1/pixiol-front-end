"use client";
import React from "react";

interface LinkButtonProps {
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href }) => {
  return (
    <div className="flex flex-row shrink-0">
      <button
        className="hover:opacity-50"
        onClick={() => navigator.clipboard.writeText(href)}
      >
        <img src="/link.svg" alt="link" />
      </button>
    </div>
  );
};

export default LinkButton;
