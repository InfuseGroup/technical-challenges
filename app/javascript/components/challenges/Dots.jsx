import React from 'react';

const Dots = ({ index, count, go }) => (
  <div className="dots">
    {Array.from(Array(count), (_, i) => i).map(i => (
      <button key={i} disabled={i === index} onClick={() => go(i)} />
    ))}
  </div>
);

export default Dots;
