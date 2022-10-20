import { useState, useEffect } from 'react'
import './App.css';
import './style.css'
import Button from './components/Button';
import ImageBox from './components/ImageBox';
import Header from './components/Header';
import Searcher from './components/Searcher';

function App() {
  const [bgImg, setBgImg] = useState(null)
  const [title, setTitle] = useState(null)
  const [searchText, setSearchText] = useState(null)

  const handleClick = async () => {
    try {
      // const URL = `api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`
      const URL = `http://api.giphy.com/v1/gifs/random?api_key=vRfMDMBaxsb4cwj0yaFKDz9kZ6TO08G1&limit=1`
      const res = await fetch(URL)
      const data = await res.json();
      console.log(data.data.title)
      setBgImg(data.data.images.original.url)
      setTitle(data.data.title)

    } catch (error) {
      console.log(`error in fetch: ${error}`);
    }
  }

  const handleSearchClick = async () => {
    try {
      // const URL = `api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`
      const URL = `http://api.giphy.com/v1/gifs/search?api_key=vRfMDMBaxsb4cwj0yaFKDz9kZ6TO08G1&limit=100&q=${searchText}`
      const res = await fetch(URL, {
        mode: 'cors',
      })
      const json = await res.json();
      const length = json.data.length;
      const idx = Math.floor(Math.random() * length)
      setBgImg(json.data[idx].images.original.url)
      setTitle(json.data[idx].title)

    } catch (error) {
      console.log(`error in fetch: ${error}`);
    }
  }
  return (
    <div className="App my-app" style={{ backgroundImage: { bgImg } }}>
      <div className="controls-wrapper">
        <Button type='search' searchHandler={handleSearchClick} setSearchText={setSearchText} searchText={searchText} />
        <Button type='random' buttonHandler={handleClick} />
      </div>
      <div className="wrapper">
        <Header title={title} />
        <ImageBox imgSrc={bgImg} />
      </div>
    </div>
  );
}

export default App;
