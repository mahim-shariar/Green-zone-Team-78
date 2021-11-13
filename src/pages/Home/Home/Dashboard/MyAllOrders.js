import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import Swal from 'sweetalert2';

const MyAllOrders = (props) => {
  const { name, discountPrice, date, image,_id } = props.order;
  
  const handleDelete = (id) => {
    fetch(`https://stormy-wave-87937.herokuapp.com/myAllOrder/${id}`, {
      method: 'DELETE',
      // headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          Swal.fire(
            'Confirm to Delete?',
          )
        }
      })
  }

    return (
        <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Order Date: {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {discountPrice}
        </Typography>
         </CardContent>
        <CardActions>
        <Button onClick={()=>handleDelete(_id)} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
         </CardActions>
        </Card>
        </Grid>
    );
};

export default MyAllOrders;