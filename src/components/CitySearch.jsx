import React from "react";

export default (props) => {
  return (
    <div className="flex flex-col gap-3 my-3 justify-center text-left w-full">
      <label htmlFor="#city">City</label>
      <select
        defaultValue={""}
        id="city"
        className="text-black"
        type="text"
        value={props.city}
        onChange={(e) => props.cityReady(e.target.value)}
      >
        {(props.countries[props.country] ?? []).map((city) => (
          <option value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};
