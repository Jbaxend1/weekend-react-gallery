import React, { useState, useEffect } from 'react';
// import GalleryList from '../GalleryList/GalleryList';

import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {
  const [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryArray(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong')
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryArray={galleryArray}/>
    </div>
  );
}

export default App;
