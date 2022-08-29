import React from "react";

export default (props) => {
  return (
    <div className="flex flex-col items-start">
      <p className="font-bold text-xl text-amber-50">{props.prayerName}</p>
      <p className="text-4xl font-light">{props.prayerTime}</p>
    </div>
  );
};
