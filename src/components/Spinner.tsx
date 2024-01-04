import React from "react";

const Spinner = () => (
  <div className="flex h-screen  ">
    <div className="m-auto text-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
      <h1>please wait</h1>
    </div>
  </div>
);

export default Spinner;
