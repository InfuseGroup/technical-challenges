import * as React from 'react';

import NextButton from './NextButton';

export default function Counter() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <h1>🥉 Challenge 1</h1>
      <h3>1. Fix the counter.</h3>
      <h3>2. Add a way to reset the counter.</h3>
      <h3>3. Set the counter to -10.</h3>

      <div>
        <input readOnly value={count} />
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      {count === -10 && <NextButton />}
    </div>
  );
}
