import * as React from 'react';

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';

  const []

  const Component = React.Component;
  const Shuffle = window.Shuffle;

/* I understand that I need to assign these images a random number
  and pass through to the onClick action of the button, so that
  each time it's clicked, it will grab a different image
  */

  const randomID = Math.floor(Math.random + 1);

/* these probably need turning into an array for the slider
this guide looks useful: https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
*/
  const [image1Url, setImage1Url] = React.useState<string>('');
  const [image2Url, setImage2Url] = React.useState<string>('');
  const [image3Url, setImage3Url] = React.useState<string>('');
  const [image4Url, setImage4Url] = React.useState<string>('');


  React.useEffect(() => {
    getImage('2020-02-13').then(response => setImage1Url(response));
    getImage('2020-02-12').then(response => setImage2Url(response));
    getImage('2020-02-02').then(response => setImage3Url(response));
    getImage('2020-02-01').then(response => setImage4Url(response));
  }, []);

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
      /* I can see that the refactoring task here is to take the repeated code below
      and use some sort of iterating loop, but I really can't figure out how to do this. I
      also lack the knowledge to make this more Reacty
      */
      <h3>2. Convert the images into a slider using the pagination buttons.</h3>

      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${image1Url})` }} />
        <div className="card" style={{ backgroundImage: `url(${image2Url})` }} />
        <div className="card" style={{ backgroundImage: `url(${image3Url})` }} />
        <div className="card" style={{ backgroundImage: `url(${image4Url})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles}>Previous</button>
        <button style={buttonStyles}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>
      /* this can potentially be achieved by using the NASA api documentation to fetch
      an image from their database each time */
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${image1Url})` }} />

      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles}>Randomise</button>
      </div>
    </div>
  );
}
