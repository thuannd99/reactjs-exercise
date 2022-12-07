import React from "react";
import FilterFruits from "./filter-fruits";
import SimpleCounter from "./simple-counter";
import Checklist from "./checklist";
import CallSampleApi from "./call-sample-api";

const View = () => {
  return (
    <div>
      <FilterFruits />
      <SimpleCounter />
      <Checklist />
      <CallSampleApi />

    </div>
  );
};

export default View;
