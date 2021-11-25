import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const ManageSingleProduct = (props) => {
    const { name, image, description, price, discountPrice,_id} = props.manageProduct;
    
    const handleDelete = id => {
      fetch(`https://stormy-wave-87937.herokuapp.com/myAllOrder/${id}`, {
         method: 'DELETE'
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
        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#674437',fontWeight:'800'}}>
          {name}
        </Typography> <hr />
        <Typography variant="body2" sx={{color:'#9c5938'}}>
          {description}
        </Typography>
        <Box sx={{display:'flex',justifyContent: 'space-around'}}>
        <Typography variant="h6" sx={{color:'#99402c'}}>
          Discount Offer: {discountPrice}
        </Typography>
        <Typography variant="h6" sx={{color:'#99402c'}}>
          Net Price: <s>{price}</s>
        </Typography>                
        </Box>
      </CardContent>
      <CardActions sx={{justifyContent:'space-around'}}>
        <Button onClick={()=>handleDelete(_id)}
        variant="outlined"
        startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined">
        See More
      </Button>
      </CardActions>
       </Card>
        </Paper>
        </Grid>
    );
};
export default ManageSingleProduct;