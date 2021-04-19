import * as React from 'react';

export default function Home({ linkPath }: { linkPath: string }) {
  const [isTextVisible, setIsTextVisible] = React.useState<boolean>(false);

  function handleClick() {
    if (!linkPath) {
      alert("You gotta fix the button first");
    } else {
      window.location.href = linkPath;
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsTextVisible(true);
    }, 750);
  }, []);

  const wrapperStyles = {
    opacity: 0,
    transition: 'opacity 3s linear',
  };

  if (isTextVisible) {
    wrapperStyles.opacity = 1;
  }

  return (
    <div style={wrapperStyles}>
      <div>
        <h1>🌎 Hello World!</h1>
        <h3>1. Fix this button to take you to the first challenge.</h3>
      </div>
      <div className="text-center">
        <button onClick={handleClick}>Let's go!</button>
      </div>
    </div>
  );
}
