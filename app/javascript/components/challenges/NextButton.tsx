import * as React from 'react';

export default function NextButton() {
  const [left, setLeft] = React.useState(0)
  const [top, setTop] = React.useState(0)

  function handleMouseMove(event) {
    const randomIndex = Math.floor(Math.random() * 4);
    const positionArray = [
      { x: -200, y: -200 },
      { x: -400, y: 200 },
      { x: 400, y: -200 },
      { x: 50, y: 200 },
    ]
    setLeft(positionArray[randomIndex].x)
    setTop(positionArray[randomIndex].y)
  }

  const styles = {
    padding: '10px',
    transform: `translateY(${top}px) translateX(${left}px)`,
    transition: 'transform 0.5s linear',
  }

  return(
    <div>
      <div style={styles} onMouseMove={handleMouseMove}>
        <a href="/challenge_2"> Go to next challenge</a>
      </div>
    </div>
  );
}