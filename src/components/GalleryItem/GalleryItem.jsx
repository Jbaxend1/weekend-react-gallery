
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material/'
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import SendIcon from '@mui/icons-material/Send';

function GalleryItem({ thing }) {
    const [toggle, setToggle] = useState(false);

    const showDes = () => {
        if (toggle === true) {
            return <CardContent>
                <Typography>{thing.description}</Typography>
                <br />
                <br />
                <Button variant="contained" 
                    size="small" 
                    endIcon={<SendIcon />} onClick={() => setToggle()}>
                        Back to Picture
                </Button>
            </CardContent>
        } else {
            return <CardContent>
                <CardMedia
            component="img"
            height="140"
            image={thing.path}
            />
            <br />
            <br />
            <Button variant="contained" size="small" onClick={() => setToggle(!toggle)}>Learn More</Button>
            </CardContent>
        }
    }

    return <Grid item xs={12} sm={4} key={thing.id}>
        <Card elevation={3}>
            <CardActionArea>
               
                    {showDes()}
                <Typography>
                   {thing.likes}
                </Typography>
                <Fab size="small">
                    <FavoriteIcon />
                </Fab>
                <br />
                <br />
                <br />
            </CardActionArea>
        </Card>
    </Grid>
}

export default GalleryItem