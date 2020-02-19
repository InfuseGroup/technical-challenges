import React from "react";

import Dots from "./Dots";

const Navigation = ({
  isPaused,
  index,
  count,
  next,
  previous,
  go,
  play,
  pause
}) => {
  return (
    <div className="navigation">
      <Dots index={index} count={count} go={go} />
      <div className="play-pause">
        <button onClick={previous}>&lt;</button>
        {isPaused ? (
          <button onClick={play}>►</button>
        ) : (
          <button onClick={pause}>❙❙</button>
        )}
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  );
};

export default Navigation;
