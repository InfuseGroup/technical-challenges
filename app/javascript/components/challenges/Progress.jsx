import React from "react";

const Progress = ({ step, duration }) => (
  <div
    key={step}
    className="step-precentage"
    style={{ animationDuration: `${duration}ms` }}
  />
);

export default Progress;
