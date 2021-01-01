import * as React from 'react';

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';
  const dates = ['2020-02-13', '2020-02-12', '2020-02-02', '2020-02-01'];
  const randomDateGenerator = () => {
    const min = new Date(1996,6,16).getTime();
    const max = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return new Date(random).toISOString().slice(0,10);
  }

  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [randomDate, setRandomDate] = React.useState<string>(randomDateGenerator());
  const [randomImage, setRandomImage] = React.useState<string>('');

  React.useEffect(() => {
    getImage(dates[currentIndex]).then(response => setImageUrl(response));
    getImage(randomDate).then(response => setRandomImage(response));
  }, [currentIndex, randomDate]);
  
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % dates.length);
  const handlePrevious = () => setCurrentIndex(prev => (prev - 1 + dates.length) % dates.length);
  const handleRandomise = () => setRandomDate(randomDateGenerator());
  
  const getImage = async(date: string) => {
    try {
      const response = await fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.hdurl ? jsonResponse.hdurl : 'https://apod.nasa.gov/apod/image/1901/sombrero_spitzer_3000.jpg';
      }
    } catch (error) {
      console.log(error);
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
        <div className="card" style={{ backgroundImage: `url(${randomImage})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={handleRandomise}>Randomise</button>
      </div>
    </div>
  );
}
