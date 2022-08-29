import React from "react";

export default (props) => {
  return (
    <div className="flex flex-col gap-3 my-3 justify-center text-left w-full">
      <label htmlFor="#country">Country</label>
      <select
        defaultValue={""}
        className="text-black"
        type="text"
        value={props.country}
        onChange={(e) => props.countryReady(e.target.value)}
      >
        <option value=""></option>
        {props.countriesList.map((country) => (
          <option value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
};
