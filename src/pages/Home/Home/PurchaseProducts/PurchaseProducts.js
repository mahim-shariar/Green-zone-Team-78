import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const style = {
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '2%',
    width:'60%'
}


const PurchaseProducts = () => {
    const { productId } = useParams();
    const [purchase, setPurchase] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/purchaseProducts/${productId}`)
            .then(res => res.json())
            .then(data=>setPurchase(data[0]))
    }, [productId])
    // console.log(purchase);
 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container sx={{ flexGrow: 1,mt:5 }}>
         <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={purchase?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {purchase?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {purchase?.description}
        </Typography>
      </CardContent>
    <CardActions>
     <Button size="large">Discount: {purchase?.discountPrice}</Button>                     
      <Button size="large"><s>Net Price: {purchase?.price}</s></Button>   
      </CardActions>
        </Card>
                    
          </Grid>
         <Grid item xs={12} md={6}>
         <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={purchase.name}
                style={style}
              />
              <br />
              <input
                {...register("Name")}
                 placeholder="Your Name"
                style={style}
                defaultValue={user.displayName}            
              />
              <br />
              <input
                {...register("date")}
                type="date"
                style={{padding:'10px',width:'60%',borderRadius:'5px'}}            
              />
              <br />
              <input
                {...register("price", { required: true })}
                defaultValue={purchase.discountPrice}
                style={style}
                placeholder='price'
              />
              <br />
              <input
                {...register("image", { required: true })}
                 defaultValue={purchase.image}
                 style={style}
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

                <input
                style={{backgroundColor:'#574437',width:'64%',padding:'10px',color:'white',border:'1px solid gray'}}
                type="submit"
                value="Order Here"
              />
            </form>
         </Grid>
        </Grid>
      </Container>
    );
};
export default PurchaseProducts;