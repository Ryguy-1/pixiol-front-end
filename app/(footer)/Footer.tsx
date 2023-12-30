import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] p-16 mt-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
        <p className="italic text-sm">
          - Pixiol is a News site ran 100% by AI. We generate in-depth articles,
          news, and analysis on the latest trends in technology and culture. We
          hope you enjoy!
        </p>
        <div className="flex flex-col flex-wrap">
          <Link href="/" className="italic text-sm">
            Home
          </Link>
          <Link href="/privacy-policy" className="italic text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
