"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface PaginationButtonsProps {
  currentSkip: number;
  skipIncrement: number;
  isRenderLeft: boolean;
  isRenderRight: boolean;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentSkip,
  skipIncrement,
  isRenderLeft,
  isRenderRight,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-center gap-4 mt-24">
      {isRenderLeft ? (
        <button
          className="text-4xl font-bold"
          onClick={() => {
            // url like: https://www.pixiol.com/category/7MXPtj2ithubWMnMaXZnnq/0    (replace last number with currentSkip - skipIncrement)
            if (currentSkip - skipIncrement < 0) {
              return;
            }
            router.push(
              pathname.split("/").slice(0, -1).join("/") +
                "/" +
                (currentSkip - skipIncrement)
            );
          }}
        >
          {"<"}
        </button>
      ) : (
        <></>
      )}
      {isRenderRight ? (
        <button
          className="text-4xl font-bold"
          onClick={() => {
            router.push(
              pathname.split("/").slice(0, -1).join("/") +
                "/" +
                (currentSkip + skipIncrement)
            );
          }}
        >
          {">"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PaginationButtons;
