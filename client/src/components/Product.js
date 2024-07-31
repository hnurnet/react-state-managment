import React,{useEffect} from 'react'
import {Card,Button} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {add} from "../store/cartSlice";
import { fetchContent } from '../store/contentSlice';


const Product = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContent())
       
    }, [dispatch]);
    const {contents : products} = useSelector((state) => state.content)
    const addToCart = (product) => {
        dispatch(add(product))
    }


    const cards = products.map(product => (
        <div className='col-md-3' style={{marginBottom: "10px"}}>
    <Card key={product.id} className='h-100'>
               <div className='text-center'>
               <Card.Img variant="top" src={product.image} 
                style={{width: "100px", height: "130px"}}/>
               </div>
                <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            $ {product.price}
        </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor: "white"}}>
        <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
    </Card>


        </div>
    ))

  return (
    <>
        <h1>Product Dashboard</h1>
        <div className='row'>
            {cards}
        </div>

        

    </>
  )
}

export default Product
