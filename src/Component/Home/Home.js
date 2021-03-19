import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Bike from '../../images/Frame-1.png'
import Bus from '../../images/Frame-2.png'
import Car from '../../images/Frame.png'
import Train from '../../images/Group.png'
import Cart from '../Cart/Cart';


const Home = () => {
    const fakeData=[{
        title:'BIKE',
        photo: Bike
    },
    {
        title:'CAR',
        photo: Car
    },
    {
        title:'BUS',
        photo: Bus
    },
    {
        title:'TRAIN',
        photo: Train
    }
]
    return (
        <Container className="homepage">
            <div className='card-area'>
            {
                fakeData.map(element => <Cart element={element}></Cart>)
            }
            </div>
        </Container>
    );
};

export default Home;