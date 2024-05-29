import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
    const navigate=useNavigate();
    
  return (
   <>
   <Row className="justify-content-center">
                <Col md={4}>
                    <Card className=" shadow-sm mb-4" style={{height:"14rem"}} onMouseOver={(e) => e.currentTarget.classList.add('hover')} onMouseOut={(e) => e.currentTarget.classList.remove('hover')}>
                        <Card.Body>
                            <Card.Title className="card-title">Book Appointment</Card.Title>
                            <Card.Text>Book a appointment with a healthcare professional.</Card.Text>
                            <Button
                                variant="primary"
                                className="btn-custom"
                                onClick={() => navigate("/bookappointment")}
                            >
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm mb-4" style={{height:"14rem"}} onMouseOver={(e) => e.currentTarget.classList.add('hover')} onMouseOut={(e) => e.currentTarget.classList.remove('hover')}>
                        <Card.Body>
                            
                            <Card.Title className="card-title">Cancel Appointment</Card.Title>
                            <Card.Text>Cancel your existing Appointment.</Card.Text>
                            <Button
                                variant="primary"
                                className="btn-custom"
                                onClick={() => navigate("/cancelappointment")}
                            >
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                </Row>
   </>
  )
}

export default Appointments