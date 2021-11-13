import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const style2 = {
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
  
      const { register, handleSubmit} = useForm();
      const onSubmit = data => {
           fetch("http://localhost:5000/confirmOrder", {
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify(data),
             })
                 .then((res) => res.json())
                 .then((data) => {
                   if (data.insertedId) {
                     alert("Ordered Ok")
                     console.log(data);
                   }
                 });                
};
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
          <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:'column',width:'40%',margin:'auto'}}>
            <input
                {...register("name")}
                defaultValue={purchase?.name}
                style={style2}
              />
                
              <input
                {...register("Name")}
                 placeholder="Your Name"
                style={style2}
                defaultValue={user?.displayName}            
              />
                <input
              {...register("Email")}
                placeholder="Email"
                style={style2}
                type="email"
                defaultValue={user?.email}     
              />
                
              <input
                {...register("Address")}
                 placeholder="Address"
                style={style2}          
              />
                 <input
                {...register("date")}
                type="date"
                style={{padding:'10px',width:'60%',borderRadius:'5px'}}            
              />
               <input
                {...register("number", { required: true })}
                style={style2}
                type="number"
                placeholder='Phone Number'
              />
               <input
                {...register("number", { required: true })}
                style={style2}
                type="number"
                defaultValue={purchase?.discountPrice}
                placeholder='Discount Price'
              />
               <input
                {...register("image", { required: true })}
                 defaultValue={purchase?.image}
                style={style2}
                placeholder="Image"
              />
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