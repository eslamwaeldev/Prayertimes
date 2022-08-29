import React from "react";
import GlobeIcon from "./GlobeIcon";

export default (props) => {
  return (
    <button
      onClick={() => {
        props.city("");
        props.country("");
        props.readyToSearch(false);
      }}
      className="bg-transparent place-self-end z-20 absolute top-0"
    >
      <GlobeIcon />
    </button>
  );
};
