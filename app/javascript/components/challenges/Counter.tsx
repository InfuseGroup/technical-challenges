import * as React from 'react';

import NextButton from './NextButton';

export default function Counter() {
  const [count, setCount] = React.useState<number>(-10);

  const [reset, setReset] = React.useState<number>(0);

  return (
    <div>
      <h1>🥉 Challenge 1</h1>
      <h3>1. Fix the counter.</h3>
      <h3>2. Add a way to reset the counter.</h3>
      <h3>3. Set the counter to -10.</h3>
      <h3>4. The default reset value is 0</h3>

      <div>
        <input readOnly value={count} />
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(reset)}>Reset</button>
        <button onClick={() => setReset(count)}>Set Current as Reset Value</button>
      </div>
      {count === -10 && <NextButton />}
    </div>
  );
}

//
// Decrease counter was changed to - 1
//
// set the default to -10 for ease of going through whilst double checking. 
// 
// added a third button called Reset, to put the counter to 0. 
//
// As this now starts at -10, not sure if you want to add a way 
// to change the "reset" value and then be able to reset to that value.
// just in case i added it.
//
