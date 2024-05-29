import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert,Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { medicineSearch } from '../api/api';
// import './medicineinfo.css';

const MedicineInfo = () => {
    const [medicineName, setMedicineName] = useState('');
    const [responseMessage, setResponseMessage] = useState([]);
    const [shoesucal, setshosucalert] = useState(false);

    const handleInputChange = (event) => {
        setMedicineName(event.target.value);
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(medicineName);
        const res= await medicineSearch(medicineName);
        if(res.medicine_data && res.medicine_data.length>0){

            setResponseMessage(res.medicine_data);
            setshosucalert(true);
        }

        // const responseMessage = `Providing information for medicine: ${medicineName}`;
        // setResponseMessage(responseMessage);
    };

    return (
<Container>
            <Card className="card text-start">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Medicine Information</Card.Title>
                    <Form id="medicineInfoForm" onSubmit={handleSubmit}>
                    <Stack direction='vertical' gap={3}>
                        <Form.Group>
                            <Form.Label htmlFor="medicineName">Enter Medicine Name:</Form.Label>
                            <Form.Control
                                type="text"
                                id="medicineName"
                                name="medicineName"
                                value={medicineName}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            // onClick={submitForm}
                            type='submit'
                        >
                            Submit
                        </Button>
                        </Stack>
                    </Form>
                    {shoesucal && (
                        <Alert variant="success" className="mt-4">
                            <Stack direction='vertical' gap={2}>
                            {responseMessage.map((med,i)=>{
                                return <div key={i}>
                                    <div style={{fontWeight:700}}>{med.MedicineName}</div>
                                    <div> <span style={{fontWeight:600}}>Composition:</span> <span>{med.Composition}</span></div>
                                    <div><span style={{fontWeight:600}}>Uses:</span> <span>{med.Uses}</span></div>
                                    <div><span style={{fontWeight:600}}>Side Effects:</span> <span>{med.Side_effects}</span></div>
                                    <div><span style={{fontWeight:600}}>Manufacturer:</span> <span>{med.Manufacturer}</span></div>
                                </div>
                            })}
                            </Stack>
                        </Alert>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MedicineInfo;
