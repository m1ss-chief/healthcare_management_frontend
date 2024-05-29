import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import './appointment.css';
import { Container, Card, Form, Button, Alert, Stack } from 'react-bootstrap';
import { registerPatient } from '../api/api';

const AppointmentRegistration = () => {

    const navigate= useNavigate();
    const [formData, setFormData] = useState({
        patient_name: "",
        contact: "",
        age: 0,
        health_problem: "",
      
    });

    // const [pdetails,setPDetails]= useState({
    //     patient_name: "",
    //     contact: "",
    //     age: 0,
    //     health_problem: "",
    //   })

    const [responseMessage, setResponseMessage] = useState('');
    const [showBtn, setShowBtn] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(formData);
        const res= await registerPatient(formData);
        if(res.success){
            setResponseMessage(`Patient registered with Patient Id ${res.patient_id}`);
            setShowBtn(true);
        }
        // navigate("/appointments");
    };

    return (
        <Container>
        <Card className="card text-start">
            <Card.Body>
                <Card.Title className="text-center mb-4">Register as a Patient</Card.Title>
                <Form id="appointmentForm" onSubmit={handleSubmit}>
                    <Stack direction='vertical' gap={3}>
                    <Form.Group>
                        <Form.Label htmlFor="patient_name">Name:</Form.Label>
                        <Form.Control
                            type="text"
                            id="patient_name"
                            name="patient_name"
                            value={formData.patient_name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="age">Age:</Form.Label>
                        <Form.Control
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="contact">Contact:</Form.Label>
                        <Form.Control
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="health_problem">Health Problem:</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="health_problem"
                            name="health_problem"
                            value={formData.health_problem}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        // onClick={submitForm}
                        type='submit'
                    >
                        Register
                    </Button>
                    </Stack>
                </Form>
                {responseMessage && (
                    <Alert variant="success" className="mt-4">
                        {responseMessage}
                    </Alert>
                )}
            </Card.Body>


            {showBtn && (
            <Button variant='success' onClick={()=>navigate("/appointments")} size='md'>Go to appointments</Button>
        )}
        </Card>

      
    </Container>
    );
};

export default AppointmentRegistration;
