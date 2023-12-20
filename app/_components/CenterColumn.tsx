import React from "react";

interface CenterColumnProps {
  children: React.ReactNode;
  maxWidthRem: number;
}

const CenterColumn: React.FC<CenterColumnProps> = ({
  children,
  maxWidthRem,
}) => {
  return (
    <div className="flex justify-center">
      <div
        style={{ width: `${maxWidthRem}rem`, maxWidth: `${maxWidthRem}rem` }}
        className={`flex flex-col justify-center p-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default CenterColumn;
