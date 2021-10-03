import React from "react";
import no_data from "../assets/no_data.svg";

const NoData = ({ text }) => {
  return (
    <div className="no-data fadeIn">
      <img className="no-data--image" src={no_data} alt="no data found" />
      <p className="is-size-4 is-size-3-desktop has-text-centered no-data--text">
        {text}
      </p>
    </div>
  );
};

export default NoData;
