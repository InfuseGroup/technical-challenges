import * as React from 'react';

export default function NextButton() {
  const [left, setLeft] = React.useState<number>(0);
  const [top, setTop] = React.useState<number>(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const randomIndex = Math.floor(Math.random() * 4);
    const positionArray = [
      { x: -200, y: -200 },
      { x: -400, y: 200 },
      { x: 400, y: -200 },
      { x: 50, y: 200 },
    ];
    setLeft(positionArray[randomIndex].x);
    setTop(positionArray[randomIndex].y);
  }

  const styles: React.CSSProperties = {
    padding: '10px',
    transform: `translateY(${top}px) translateX(${left}px)`,
    transition: 'transform 0.5s linear',
  };

  return (
    <div>
      <div style={styles}>
        <a href="/challenge_2"> Go to next challenge</a>
      </div>
    </div>
  );
}
