import React, { useState, useEffect } from 'react';
// import GalleryList from '../GalleryList/GalleryList';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

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
      <p>Gallery Goes here</p>
      <Container maxWidth='sm'>
        <Grid container spacing={2}> {
          galleryArray.map((item) => {
            return <Grid item xs={12} sm={4} key={item.id}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.path}
                />
                <CardContent>
                  <Typography>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          })
        }
        </Grid>


      </Container>
    </div>
  );
}

export default App;
