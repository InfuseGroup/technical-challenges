import * as React from 'react';

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';

//  const [image1Url, setImage1Url] = React.useState<string>('');
//  const [image2Url, setImage2Url] = React.useState<string>('');
//  const [image3Url, setImage3Url] = React.useState<string>('');
//  const [image4Url, setImage4Url] = React.useState<string>('');
//
//  React.useEffect(() => {
//    getImage('2020-02-13').then(response => setImage1Url(response));
//    getImage('2020-02-12').then(response => setImage2Url(response));
//    getImage('2020-02-02').then(response => setImage3Url(response));
//    getImage('2020-02-01').then(response => setImage4Url(response));
//  }, []);
//
//  function getImage(date: string) {
//    return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
//      .then(response => {
//        return response.json();
//      })
//      .then(jsonResponse => {
//        return jsonResponse.hdurl;
//      });
//  }


// the dates used as the references are put into an array,
// The method of generating the image URL is the same, but only done 1 at a time
// put into a state so it will be reactive, and using the array index to decide
// which one is loaded at each time.

  const pictureDates = ['2020-02-13','2020-02-12','2020-02-02','2020-02-01'];
  const [picIndex, setPicIndex] = React.useState<number>(0);
  const [imgUrl, setImgUrl] = React.useState<string>('');

// the plus and minus functions just + or - 1, unless it is the
// length of the array, in which case it goes back to 0, or if it
// goes to -1, it will be put as the array length -1.
  
  function plusPicIndex() {
   (picIndex + 1) === pictureDates.length ? setPicIndex(0) : setPicIndex(picIndex + 1)
  }
  function minusPicIndex() {
    (picIndex - 1) === -1 ? setPicIndex(3) : setPicIndex(picIndex - 1)
  }

// same as previous, just using the response to set the url state.
  function loadImage(index: number) {
    let date = pictureDates[index];
    return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {setImgUrl(jsonResponse.hdurl)
      })
    };
  // essentially the componentDidMount, to load the img first time.
  React.useEffect(() => {
    loadImage(picIndex)
  });
  
  // adaptable random img generator using array length
  const randomImg = () => {
    let num = Math.floor(Math.random()*(pictureDates.length))
    setPicIndex(num)
  }

// to create the pagination buttons I used for loop to fill an empty array with
// the html outputs to be rendered. then made them into buttons to match the previous
// buttons and copied the style.

  function Pagination() {
    const pages = [];
    for (let i = 0; i < pictureDates.length; i++) {
      pages.push(<button className="page-item" style={buttonStyles} onClick={() => setPicIndex(i)}>{i + 1}</button>);
    }
    return <>{pages}</>;
  }

  const buttonStyles: React.CSSProperties = {
    cursor: 'pointer',
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
        <div className="card" style={{ backgroundImage: `url(${imgUrl})`}} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={minusPicIndex}>Previous</button>
        <Pagination />
        <button style={buttonStyles} onClick={plusPicIndex}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={randomImg}>Randomise</button>
      </div>
    </div>
  );
}
