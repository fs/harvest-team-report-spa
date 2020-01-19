import React from 'react';

const WeekInfo = ({ week, year }: { week?: string; year?: string }) => {
  return (
    <div>
      {week && `week: ${week}`} {week && year && `,`} {year && `year: ${year}`}
    </div>
  );
};

export default WeekInfo;
