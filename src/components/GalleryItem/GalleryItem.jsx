
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

function GalleryItem({ thing }) {
    const [toggle, setToggle] = useState(false);

    const showDes = () => {
        if (toggle === true) {
            return <Typography>{thing.description}</Typography>
        } else {
            return <CardMedia
            component="img"
            height="140"
            image={thing.path}
        />
        }
    }

    return <Grid item xs={12} sm={4} key={thing.id}>
        <Card elevation={3}>
            <CardActionArea>
                <CardContent>
                    {showDes()}
                </CardContent>
                <Fab>
                    <FavoriteIcon />
                </Fab>
                <Button onClick={() => setToggle(!toggle)}>Learn More</Button>
            </CardActionArea>
        </Card>
    </Grid>
}

export default GalleryItem