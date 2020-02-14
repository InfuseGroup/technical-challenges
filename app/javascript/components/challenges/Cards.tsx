import * as React from 'react';

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W'
  const baseUri = 'https://api.nasa.gov/planetary/apod'

  const [image1Url, setImage1Url] = React.useState('')
  const [image2Url, setImage2Url] = React.useState('')
  const [image3Url, setImage3Url] = React.useState('')
  const [image4Url, setImage4Url] = React.useState('')

  React.useEffect(
    () => {
      getImage('2020-02-13').then(response => setImage1Url(response))
      getImage('2020-02-12').then(response => setImage2Url(response))
      getImage('2020-02-02').then(response => setImage3Url(response))
      getImage('2020-02-01').then(response => setImage4Url(response))
    },
    [],
  )

  function getImage(date) {
    return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      return jsonResponse.hdurl
    });
  }

  return(
    <div style={{ overflowX: 'scroll', textAlign: 'center' }}>
      <h3>1. Refactor this code</h3>
      <h3>2. Convert the images into a slider</h3>
      <h3>3. Randomise the images on page refresh</h3>
      {/* NASA API docs here: https://api.nasa.gov/ */}
      <div className="cards">
        <div className="card">
          <div className="card__inner" style={{ backgroundImage: `url(${image1Url})`, height: '700px' }}/>
        </div>
        <div className="card">
          <div className="card__inner" style={{ backgroundImage: `url(${image2Url})`, height: '700px' }}/>
        </div>
        <div className="card">
          <div className="card__inner" style={{ backgroundImage: `url(${image3Url})`, height: '700px' }}/>
        </div>
        <div className="card">
          <div className="card__inner" style={{ backgroundImage: `url(${image4Url})`, height: '700px' }}/>
        </div>
      </div>
    </div>
  )
}
