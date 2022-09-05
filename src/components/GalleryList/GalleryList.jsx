
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';



function GalleryList({galleryArray}) {
    
    return <div>
      <p>Gallery Goes here</p>
      <Container maxWidth='sm'>
        <Grid container spacing={2}> {
          galleryArray.map((thing) => {
            return <Grid item xs={12} sm={4} key={thing.id}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="140"
                  image={thing.path}
                />
                <CardContent>
                  <Typography>
                    {thing.description}
                  </Typography>
                  <Typography>
                    {thing.likes}
                  </Typography>
                  <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab size="small" color="primary">
                      <FavoriteIcon />
                    </Fab>
                    <Fab variant="extended" size="small" color="primary">
                      <NavigationIcon />
                      Picture
                    </Fab>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          })
        }
        </Grid>
      </Container>
    </div>
}

export default GalleryList;