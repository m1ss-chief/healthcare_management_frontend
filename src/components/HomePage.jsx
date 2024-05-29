import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./homepage.css"
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate= useNavigate();
    return (
        <div className="container-fluid" style={{marginTop:'8rem'}}>
            <h1 className="display-4 mb-4 text-center mt-4">Healthcare Management</h1>
            <Row >
                {/* <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text">Book a consultation with a healthcare professional.</p>
                            <button className="btn btn-primary btn-custom" onClick={() => navigate("/registration")}>Get Started</button>
                        </div>
                    </div>
                </div> */}
                <Col md={4} lg={4}>
                    <Card className=" shadow-sm mb-4" style={{height:"15rem"}} onMouseOver={(e) => e.currentTarget.classList.add('hover')} onMouseOut={(e) => e.currentTarget.classList.remove('hover')}>
                        <Card.Body>
                            <Card.Title className="card-title">Schedule an Appointment</Card.Title>
                            <Card.Text>Book a consultation with a healthcare professional.</Card.Text>
                            <Button
                                variant="warning"
                                className="btn-custom"
                                onClick={() => navigate("/registration")}
                            >
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} lg={4}>
                    <Card className=" shadow-sm mb-4" style={{height:"15rem"}} onMouseOver={(e) => e.currentTarget.classList.add('hover')} onMouseOut={(e) => e.currentTarget.classList.remove('hover')}>
                        <Card.Body>
                            <Card.Title className="card-title">First Aid Advice</Card.Title>
                            <Card.Text>Get immediate first aid guidance.</Card.Text>
                            <Button
                                variant="info"
                                className="btn-custom"
                                onClick={() => navigate("/firstaid")}
                            >
                                Get Advice
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} lg={4}>
                    <Card className=" shadow-sm mb-4" style={{height:"15rem"}} onMouseOver={(e) => e.currentTarget.classList.add('hover')} onMouseOut={(e) => e.currentTarget.classList.remove('hover')}>
                        <Card.Body>
                            <Card.Title className="card-title">Medicine Information</Card.Title>
                            <Card.Text>Find detailed information about medicines.</Card.Text>
                            <Button
                                variant="success"
                                className="btn-custom"
                                onClick={() => navigate("/medicineinfo")}
                            >
                                Discover
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Medicine Information</h5>
                            <p className="card-text">Find detailed information about medicines.</p>
                            <button className="btn btn-secondary btn-custom" onClick={() => navigate("/firstaid")}>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Medicine Information</h5>
                            <p className="card-text">Find detailed information about medicines.</p>
                            <button className="btn btn-success btn-custom" onClick={() => navigate("/medicineinfo")}>Discover</button>
                        </div>
                    </div>
                </div> */}
            </Row>
        </div>
    );
}



export default HomePage;
