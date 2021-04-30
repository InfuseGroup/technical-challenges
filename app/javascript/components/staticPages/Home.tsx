import * as React from 'react';

// Home takes parameter linkPath which is typed as a String

// **** How Linkpath is defined - notes **** //
// Linkpath is defined within /views/static_pages/home.html.erb
// https://stackoverflow.com/questions/37811890/react-rails-gem-pass-hash-in-view-helper-react-component
// "The components being referenced are in the `app/javascript/components` directory, and we can pass props to the react components as a hash."
// ****//

export default function Home({ linkPath }: { linkPath: string }) {
  // https://reactjs.org/docs/hooks-state.html
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
