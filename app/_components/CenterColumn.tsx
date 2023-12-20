import React from "react";

const CenterColumn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-[75rem] max-w-[75rem] p-4">
        {children}
      </div>
    </div>
  );
};

export default CenterColumn;
