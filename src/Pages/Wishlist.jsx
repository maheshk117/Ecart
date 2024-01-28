import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';


function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
const handleWishlistToCart=(item)=>{
  dispatch(addToCart(item))
  dispatch(deleteFromWishlist(item.id))
}

  return (
    <div>
      <Row>
     {
      wishlistArray.length>0?wishlistArray.map((item)=>(
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
        <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))} href='#'><i   className='fa-solid fa-trash text-danger fs-3'></i></MDBBtn>
        <MDBBtn onClick={()=>handleWishlistToCart(item)} href='#'><i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
        </Col>
        )):
        <div className='text-center'> 
          <img src="https://i.pinimg.com/originals/82/e6/4f/82e64ffa12370f75a4d4a05c3870a894.gif" alt="" />
          <h1 className='mb-5'>Your Wishlist is Empty</h1>
         <Link to={'/'}>
          <button className='btn btn-primary mb-5'>Back to Home</button>
          </Link>
        </div>
     }

      </Row>
    </div>
  )
}

export default Wishlist