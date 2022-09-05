import GalleryItem from '../GalleryItem/GalleryItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




function GalleryList({galleryArray}) {
    
    return <div>
      
      <Container maxWidth='sm'>
        <Grid container spacing={2}> {
          galleryArray.map((thing) => {
            return <GalleryItem thing={thing}/>
          })
        }
        </Grid>
      </Container>
    </div>
}

export default GalleryList;