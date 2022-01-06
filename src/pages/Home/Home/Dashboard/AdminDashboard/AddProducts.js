import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
// import productsBg from '../../../../../image/addProducts-bg.jpg';


const style = {
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '2%',
    border: "1px solid #4c4949"
}
// const style2 = {
//     background: `url(${productsBg})`,
//     backgroundSize: 'cover',
//     height:'100vh'
// }

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://stormy-wave-87937.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Added Product',
                    )
                    reset()
                }
            })
    };

    return (
        <div>
            <Typography variant='h3' sx={{ fontWeight: '900' }}>
                Add A New Product Or Change Products..!!
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column', width: '40%', margin: 'auto' }}>
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
                className='btn back-color'
                    style={{ padding: '5px', margin: '5px', borderRadius: '5px', fontSize: '20px', backgroundColor: '#574437', color: 'white' }}/>
            </form>
        </div>
    );
};

export default AddProducts;