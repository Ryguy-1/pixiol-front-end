import React from "react";

interface DateProps {
  dateString: string;
}

const Date: React.FC<DateProps> = ({ dateString }) => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <img src="/calendar.svg" alt="calendar" />
      <p className="italic font-medium">{dateString}</p>
    </div>
  );
};

export default Date;
