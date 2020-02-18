import * as React from 'react';

const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
const baseUri = 'https://api.nasa.gov/planetary/apod';

const start = new Date(2001, 0, 1)
const end = new Date()

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getImage(date: string) {
  return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`) //where is date set?
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse.hdurl;
    });
}

export default function Card({ date }) {

  const [imageUrl, setImage] = React.useState('');

  React.useEffect(() => {
    getImage(date).then(response => setImage(response));
  }, []);





function Cards() {
}
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


const childCards = ['2020-02-13', '2020-02-12', '2020-02-02', '2020-02-01'].map((date) => {
    // return <Card date={date} />
  });


  //check my photos as I saved a couple of trial solutions to this
/* these probably need turning into an array for the slider
this guide looks useful: https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
*/

  //todo write a random function that generates a date and
  // then passes that into a url



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
        <button style={buttonStyles}>Previous</button>
        <button style={buttonStyles}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>

      <div className="cards">
        { childCards }
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles}>Randomise</button>
      </div>
    </div>
  );
};
