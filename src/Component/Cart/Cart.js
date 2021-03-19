import React from 'react';
import { Card } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.element)
    const {title,photo}=props.element
    return (
        <div className="cards">
            <Card className="single-card" style={{ width: '14rem' }}>
                <Card.Img className="card-img" variant="top" src={photo}/>
                <Card.Body>
                    <Card.Title><h4>{title}</h4></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;