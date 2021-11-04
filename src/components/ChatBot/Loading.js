import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div
      className="absolute w-full h-full z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,.5)",
      }}
    >
      <Loader
        type="TailSpin"
        color="#2563eb"
        height={100}
        width={100}
      />
    </div>
  );
}

export default Loading;
