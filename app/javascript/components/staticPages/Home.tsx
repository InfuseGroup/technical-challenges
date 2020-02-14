import * as React from 'react';

export default function Home({ linkPath }: { linkPath: string; }) {
  const [isTextVisible, setIsTextVisible] = React.useState(false)

  function handleClick() {
    if (!linkPath) {
      alert('Just kidding the link is broken')
    } else {
      window.location.href = linkPath
    }
  }

  React.useEffect(
    () => {
      setTimeout(
        () => {
          setIsTextVisible(true)
        },
        750,
      )
    },
    [],
  )

  const wrapperStyles = {
    opacity: 0,
    transition: 'opacity 3s linear'
  }

  if (isTextVisible) {
    wrapperStyles.opacity = 1;
  }

  return(
    <div style={wrapperStyles}>
      <div>
        <h1>Hello World!</h1>
      </div>
      <div className="text-center">
        <a href="javascript:void(0)" onClick={handleClick}>Let's go!</a>
      </div>
    </div>
  )
}
