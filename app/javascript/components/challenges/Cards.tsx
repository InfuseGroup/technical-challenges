import * as React from 'react';
import Carousel from "./Carousel"

const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
const baseUri = 'https://api.nasa.gov/planetary/apod';


// not the most elegant date randomiser, I know, but works (sort of)
  var myDate = "2019-0"+Math.floor(Math.random()*12).toString() +"-" +  Math.floor(Math.random()*29).toString();
   console.log(myDate);

function getImage(date: string) {
  return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${myDate}`)
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

  const images = [
{ src: "https://apod.nasa.gov/apod/image/2002/freeflyer_nasa_960.jpg" },
{ src: "https://apod.nasa.gov/apod/image/2002/SolarOrbiterLaunch_Demeter_960.jpg" },
{ src: "https://apod.nasa.gov/apod/image/2002/EclipseCamel_Cripps_960.jpg" },
{ src: "https://apod.nasa.gov/apod/image/2002/freeflyer_nasa_960.jpg" }

];


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
      <h3>Slider</h3>
      <h3>1. Refactor this code to remove duplication and make it more 'Reacty'.</h3>

      <h3>2. Convert the images into a slider using the pagination buttons.</h3>

// styling to fix here as it's bleeding into the stuff below
  <div className="app">
      <div className="cards">
     <div className="wrapper">
       <Carousel initialStep={1} images={images} />
     </div>
     </div>
   </div>

//image randomiser exists, but need to work out how to make onClick work
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>

      <div className="cards">
        { childCards }
      </div>

      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles}  >Randomise</button>

      </div>
    </div>
  );
};
