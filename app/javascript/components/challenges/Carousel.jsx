import React from 'react';
import { useStep } from 'react-hooks-helper';

import Navigation from './Navigation';
import Progress from './Progress';

const Carousel = ({ initialStep, images }) => {
  const { step, navigation, index, isPaused, autoAdvanceDuration } = useStep({
    initialStep,
    steps: images,
  });
  const { description = '', src, alt = '' } = step;

  return (
    <div className="cards">
      <div className="card">
        <div className="carousel">
          <img alt={alt} src={src} />
        <Navigation
        isPaused={isPaused}
        index={index}
        count={images.length}
        {...navigation}
        />
      {!isPaused && <Progress step={index} duration={autoAdvanceDuration} />}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
