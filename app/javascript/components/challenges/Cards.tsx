import * as React from 'react';

export default function Cards() {
  // https://github.com/nasa/apod-api
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';

  // *** One image URL, one Set Image function, use with index *** //
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const datesArray = ['2020-02-13', '2020-02-12', '2020-02-02', '2020-02-01'];
  const [selectedCardIndex, setSelectedCardIndex] = React.useState<number>(0);
  const [randomImageUrl, setRandomUrl] = React.useState<string>('');

  React.useEffect(() => {
    // One Get image, pass date as variable 
    getImage(datesArray[selectedCardIndex]).then(response => setImageUrl(response));
  }, [selectedCardIndex]);

  function getImage(date: string) {
    return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.hdurl;
      });
  }
  
  const randomise = () => {
    getImageRandom().then(response => setRandomUrl(response));
  }

  function getImageRandom() {
    return fetch(`${baseUri}?api_key=${nasaApiKey}&count=1`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse[0].url;
      });
  }
  
  React.useEffect(() => {
    getImageRandom().then(response => setRandomUrl(response));
  }, []);

  const previousCard = () => {
    if (selectedCardIndex != 0) {
      setSelectedCardIndex(selectedCardIndex - 1);
    } else {
      setSelectedCardIndex(datesArray.length - 1);
    }
  }

  const nextCard = () => {
    if (selectedCardIndex < datesArray.length - 1) {
      setSelectedCardIndex(selectedCardIndex + 1);
    } else {
      setSelectedCardIndex(0);
    }
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
      <h3>1. Refactor this code to remove duplication.</h3>
      <h3>2. Convert the images into a slider using the pagination buttons.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={previousCard}>Previous</button>
        <button style={buttonStyles} onClick={nextCard}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${randomImageUrl})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={randomise}>Randomise</button>
      </div>
    </div>
  );
}
