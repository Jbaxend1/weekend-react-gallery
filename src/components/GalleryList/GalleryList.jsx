import GalleryItem from '../GalleryItem/GalleryItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';

function GalleryList({ galleryArray, fetchGallery }) {

  const addLike = (thingId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${thingId}`,
    }).then(response => {
      fetchGallery();
    }).catch(error => {
      console.log(error)
      alert('Something went wrong in PUT')
    })
  }

  return <div>
            <Container maxWidth='sm'>
              <Grid container spacing={2}> {
                galleryArray.map((thing) => {
                  return <GalleryItem thing={thing}
                                      key={thing.id}
                                      addLike={addLike} 
                          />
                })
              }
              </Grid>
            </Container>
          </div>
}

export default GalleryList;