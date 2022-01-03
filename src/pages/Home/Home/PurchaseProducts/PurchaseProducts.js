import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import './buy.css'
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';


const PurchaseProducts = () => {
  const { productId } = useParams();
  const [purchase, setPurchase] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://stormy-wave-87937.herokuapp.com/purchaseProducts/${productId}`)
      .then(res => res.json())
      .then(data => setPurchase(data[0]))
  }, [productId])

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch("https://stormy-wave-87937.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Successfully Order Completed',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          //  console.log(data);
        }
      });
  };
  return (
    <>
    <Navigation></Navigation>
      <Container sx={{ flexGrow: 1, mt: 5,marginY:10}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
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
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column', width: '40%', margin: 'auto' }}>
              <input
                {...register("name")}
                defaultValue={purchase?.name}
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
              />

              <input
                {...register("Name")}
                placeholder="Your Name"
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
                defaultValue={user?.displayName}
              />
              <input
                {...register("Email")}
                placeholder="Email"
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
                type="email"
                defaultValue={user?.email}
              />

              <input
                {...register("Address")}
                placeholder="Address"
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
              />
              <input
                {...register("date")}
                type="date"
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
              />
              <input
                {...register("number", { required: true })}
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
                type="number"
                placeholder='Phone Number'
              />
              <input
                {...register("price", { required: true })}
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
                type="number"
                defaultValue={purchase?.discountPrice}
                placeholder='Discount Price'
              />
              <input
                {...register("image", { required: true })}
                defaultValue={purchase?.image}
                style={{ width: '150%', padding: '15px', margin: '5px', borderRadius: '5px' }}
                placeholder="Image"
              />
              <input className='btn back-color '
                style={{ width: '165%', padding: '5px', margin: '5px', borderRadius: '5px', fontSize: '20px', backgroundColor: '#574437', color: 'white' }}
                type="submit"
                value="Order Here"
              />
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default PurchaseProducts;