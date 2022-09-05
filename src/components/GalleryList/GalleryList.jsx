import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


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
                    {thing.likes} Likes
                  </Typography>
                  <Button></Button>
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