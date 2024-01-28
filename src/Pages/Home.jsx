import { Col, Row } from 'react-bootstrap'
import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import useFetch from "../Hooks/useFetch"
import { addToWishlist } from '../Redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/slices/cartSlice';

function Home() {

  const data=useFetch('https://dummyjson.com/products')
  console.log(data);
const dispatch=useDispatch()

  return (
    <div>
      <Row className='m-3'>
        {
          data.length>0?data.map((item)=>(
        <Col sm={12} md={6} lg={4}>
        <MDBCard className='mb-5'>
      <MDBCardImage src={item.thumbnail} position='top' alt='...' height={'260px'} width={'260px'} />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardTitle>{item.price}</MDBCardTitle>
        <MDBCardText>
       {item.description.slice(0,40)}
        </MDBCardText>
        <div className='d-flex justify-content-between'>
        <MDBBtn onClick={()=>dispatch(addToWishlist(item))} href='#'><i  className='fa-solid fa-heart text-danger fs-3'></i></MDBBtn>
        <MDBBtn onClick={()=>dispatch(addToCart(item))} href='#'><i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
        </Col>
        )):'No Products Found'
}
      </Row>
    </div>
  )
}

export default Home