import { Container, TableBody, TableCell, Table, TableContainer, TableRow, TableHead, Paper, Grid, Typography, Select } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';




const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);
  console.log(manageOrders);
  useEffect(() => {
    const url = 'https://stormy-wave-87937.herokuapp.com/allorders';
    fetch(url)
      .then(res => res.json())
      .then(data => setManageOrders(data))
  }, [])

  const handleDelete = (id) => {
    // console.log('handleDelete',id);
    fetch(`https://stormy-wave-87937.herokuapp.com/myAllOrders/${id}`, {
      method: 'DELETE',

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
    <Container>
      <Typography variant='h3' sx={{ fontWeight: '800', color: '#674437' }}>Order Management</Typography>
      <Typography variant='h6'>Total Orders Founded: {manageOrders.length}</Typography> <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Ordered By</TableCell>
                  <TableCell align="right">Phone No.</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {manageOrders.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="right"> <CardMedia
                      component="img"
                      height="100"
                      image={row.image}
                      alt="green iguana"
                    /></TableCell>
                    <TableCell align="right">{row.Email}</TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">{row.Address}</TableCell>
                    <TableCell align="right">
                      <Select
                        variant="standard"
                        defaultValue>
                        <option style={{ color: 'pink', cursor: 'pointer' }} value="Pending">Pending</option>
                        <option style={{ color: 'red', cursor: 'pointer' }} value='Rejected'>Rejected</option>
                        <option style={{ color: 'green', cursor: 'pointer' }} value='Shipped'>Shipped</option>
                      </Select>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleDelete(row._id)}
                        variant="contained"
                        startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ManageAllOrder;