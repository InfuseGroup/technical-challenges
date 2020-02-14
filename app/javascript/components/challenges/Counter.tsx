import * as React from 'react';

import NextButton from './NextButton';

export default function Counter() {
  const [count, setCount] = React.useState<number>(0)

  return(
    <div className="text-center">
      <h3>1. Please fix this counter</h3>
      <h3>2. Add a way to reset the counter</h3>
      <h3>3. Set the counter to -10</h3>

      <div>
        <h2>
          {count}
        </h2>
        <button onClick={() => setCount(count + 24)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      {count === -10 && <NextButton />}
    </div>
  );
}
