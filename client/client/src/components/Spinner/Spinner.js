import React from "react";
import loader from "../../assets/loader.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={loader}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
