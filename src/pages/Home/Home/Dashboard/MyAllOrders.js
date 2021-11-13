import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MyAllOrders = (props) => {
  const { name, description, price, discountPrice, image } = props.order;
    return (
        <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {discountPrice}
        </Typography>
         </CardContent>
        <CardActions>
        <Button size="small" variant='contained'>Delete</Button>
         </CardActions>
          </Card>
            </Grid>
    );
};

export default MyAllOrders;