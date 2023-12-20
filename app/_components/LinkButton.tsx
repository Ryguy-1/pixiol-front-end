"use client";
import React, { useState, useEffect } from "react";

interface LinkButtonProps {
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTooltipVisible) {
      timeout = setTimeout(() => {
        setTooltipVisible(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isTooltipVisible]);

  const handleButtonClick = () => {
    navigator.clipboard.writeText(href);
    setTooltipVisible(true);
  };

  return (
    <div className="flex flex-row shrink-0 relative">
      <button className="hover:opacity-50 shrink-0" onClick={handleButtonClick}>
        <img src="/link.svg" alt="link" />
      </button>
      <div
        className={`absolute top-10 right-0 ml-2 p-2 bg-white rounded text-black font-bold italic text-xs
         transition-opacity ease-in-out duration-500 ${
           isTooltipVisible ? "opacity-100" : "opacity-0"
         }`}
      >
        Copied!
      </div>
    </div>
  );
};

export default LinkButton;
