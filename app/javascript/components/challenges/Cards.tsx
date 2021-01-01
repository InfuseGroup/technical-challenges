import * as React from 'react';

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';
  const dates = ['2020-02-13', '2020-02-12', '2020-02-02', '2020-02-01'];

  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  React.useEffect(() => {
    getImage(dates[currentIndex]).then(response => setImageUrl(response));
  }, [currentIndex]);
  
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % dates.length);
  const handlePrevious = () => setCurrentIndex(prev => (prev - 1 + dates.length) % dates.length);
  
  function getImage(date: string) {
    return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.hdurl;
      });
  }

  const buttonStyles: React.CSSProperties = {
    padding: '10px 20px',
    background: 'grey',
    color: 'white',
    margin: '10px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🥇 Challenge 3</h1>
      <a href="/thanks">Click here when you're finished</a>
      {/* NASA API docs here: https://api.nasa.gov/ */}
      <h3>Slider</h3>
      <h3>1. Refactor this code to remove duplication and make it more 'Reacty'.</h3>
      <h3>2. Convert the images into a slider using the pagination buttons.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={handlePrevious}>Previous</button>
        <button style={buttonStyles} onClick={handleNext}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles}>Randomise</button>
      </div>
    </div>
  );
}
