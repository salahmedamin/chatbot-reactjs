import React from "react";
import { useSelector } from "react-redux";
import Option from "./Options/Option";

function Options() {
  const options = useSelector((state) => state.options);
  return !options.length ? null : (
    <div
      className="w-full p-2"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {options.map((a, i) => (
        <Option key={i} content={a.value} originalValue={a.originalValue} />
      ))}
    </div>
  );
}

export default Options;
