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
                           <h6>Mirpur</h6>
                           <br></br>
                           <h6>Dhanmondi</h6>
                       </div>
                   </Col>
                   <div className="d-flex details-vehicle">
                       {/* <img src=""/> */}
                       <h6>Bike</h6>
                       <span><img src={people}/>4</span>
                       <h6>$70</h6>                
                    </div>
                    <div className="d-flex details-vehicle">
                       {/* <img src=""/> */}
                       <h6>Car</h6>
                       <span><img src={people}/>4</span>
                       <h6>$70</h6>                
                    </div>
                    <div className="d-flex details-vehicle">
                       {/* <img src=""/> */}
                       <h6>Car</h6>
                       <span><img src={people}/>4</span>
                       <h6>$70</h6>                
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