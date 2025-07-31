import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const ProductCard = ({ id, title, price, description, category, image, rating }) => {
  return (
    <div className='product-card'>
        <Card className='custom-card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title.substring(0, 20)}...</Card.Title>
                <Card.Text>
                    <b>Price</b> : {price}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductCard
