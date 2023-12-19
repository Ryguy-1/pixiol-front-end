import React from "react";

interface ArticleDuration {
  durationMinutes: number;
}

const Date: React.FC<ArticleDuration> = ({ durationMinutes }) => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <img src="/clock.svg" alt="clock" />
      <p className="italic font-medium">{durationMinutes} Min Read</p>
    </div>
  );
};

export default Date;
