import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import productsBg from '../../../../../image/addProducts-bg.jpg';


const style = {
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    marginTop:'2%'
}
const style2 = {
    background: `url(${productsBg})`,
    backgroundSize: 'cover',
    height:'100vh'
}

const AddProducts = () => {
   const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Successfully Added Products')
                    reset()
                }
            })
   };
   
    return (
        <div style={style2}>
            <Typography variant='h3' sx={{fontWeight:'900'}}>
                Add A New Product Or Change Products..!!
            </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:'column',width:'40%',margin:'auto'}}>
                <input {...register("name")}
                    style={style}
                    placeholder='Products Name'
                />
                
                <textarea {...register("description")}
                    style={style}
                    placeholder='Products Description'
                />
                <input type="number" {...register("price")}
                    style={style}
                    placeholder='Products Price'
                />
                <input type="number" {...register("discountPrice")}
                    style={style}
                    placeholder='Discount Price'
                />
                <input type="imageUrl" {...register("image")}
                    style={style}
                    placeholder='Products Image'
                />
                <input type="submit"
                    style={style} />
            </form>
     </div>
    );
};

export default AddProducts;