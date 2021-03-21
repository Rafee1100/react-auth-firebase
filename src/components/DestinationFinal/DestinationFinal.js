import React,{useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Map from '../Map/Map';
import './DestinationFinal.css';
import people from '../../images/peopleicon.png'

const Destination = () => {
    
    
 
       return (
        <Container>
            <Row>
                <Col md={4} sm={12} className="final-destination">
                   <Col className="d-flex to-from">
                       <div>
                       <img className="destImg" src="https://image.flaticon.com/icons/png/512/31/31884.png"/>
                       </div>
                       <div>
                           <p>Mirpur</p>
                           <br></br>
                           <p>Dhanmondi</p>
                       </div>
                   </Col>
                   <div className="d-flex details-vehicle">
                       {/* <img src=""/> */}
                       <p>Bike</p>
                       <span><img src={people}/>4</span>
                       <p>$70</p>                
                    </div>
                    <div className="d-flex details-vehicle">
                       {/* <img src=""/> */}
                       <p>Bike</p>
                       <span><img src={people}/>4</span>
                       <p>$70</p>                
                    </div>
                    <div className="d-flex details-vehicle">
                       {/* <img src=""/> */}
                       <p>Bike</p>
                       <span><img src={people}/>4</span>
                       <p>$70</p>                
                    </div>
                   

                </Col>

                <Col md={8} sm={12}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;