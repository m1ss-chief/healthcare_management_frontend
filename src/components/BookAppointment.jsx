import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { Container, Card, Form, Button, Alert, Stack } from 'react-bootstrap';
import { bookAppointment, queryAppointment } from '../api/api';
const BookAppointment = () => {

    const [pdetails,setPDetails]=useState({
        patient_id: undefined,
        doctor_id: undefined,
        slot: "",
    });
    const [doc,setDoc]=useState({
        doctorid:0
    })
    const [responseMessage, setResponseMessage] = useState('');
    const [queryMessage, setQueryMessage] = useState([]);
    const [shoulsshowsot, setShoulsshowsot] = useState(false);
    const [isrestrue, setIsrestrue] = useState(false);
    // const [queryMessage, setQueryMessage] = useState('');


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPDetails((prev)=>{
            return {...prev,[name]:value}
        })
    };
    const handleQueryInputChange = (event) => {
        const { name, value } = event.target;
        setDoc((prev)=>{
            return {...prev,[name]:value}
        })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(pdetails);
        const res= await bookAppointment(pdetails);

        // const responseMessage = `Providing information for medicine: ${medicineName}`;
        if (res.success){

            setResponseMessage("Appointment booked successfully");
            setIsrestrue(true);
        }
        else{
            setResponseMessage("Appointment not booked successfully");
            setIsrestrue(false);
        }
    };

    const handleQuerySubmit = async(e) => {
        e.preventDefault();
        console.log(doc);
        const res= await queryAppointment(doc.doctorid);
        console.log(res);
        setShoulsshowsot(true)
        setQueryMessage(res.available_slots);
        // const responseMessage = `Providing information for medicine: ${medicineName}`;
        // setResponseMessage(responseMessage);
    };
  return (
    <Container>
        <Card className="card text-start">
        <Form id="queryappointment" onSubmit={handleQuerySubmit} >
        <Stack direction='horizontal' className='d-flex align-items-end' gap={2}>
        <Form.Group>
                        <Form.Label htmlFor="doctorid">Query Doctors</Form.Label>
                        <Form.Control
                            type="number"
                            id="doctorid"
                            name="doctorid"
                            value={doc.doctorid}
                            onChange={handleQueryInputChange}
                            required
                        />
                    </Form.Group>
                    <Button
                        variant="success"
                        // onClick={submitForm}
                        type='submit'
                    >
                        Query
                    </Button>
                    </Stack>
                    </Form>
                    {shoulsshowsot && (
                    <Alert variant="success" className="mt-4">
                        <div>Available Slots</div>
                        <div className='d-flex gap-2'>
                
                        {queryMessage.map((slot)=>{
                            return (<div style={{backgroundColor:'white',padding:"3px 6px", borderRadius:"8px"}}>{slot}</div>)
                        })}
                        </div>
                    </Alert>
                )}
            <Card.Body>
                <Card.Title className="text-center mb-4">Book Appointment</Card.Title>

                <Form id="bookappointment" onSubmit={handleSubmit} >
                    <Stack direction='vertical' gap={3}>
                    <Form.Group>
                        <Form.Label htmlFor="patient_id">Patient ID:</Form.Label>
                        <Form.Control
                            type="number"
                            id="patient_id"
                            name="patient_id"
                            value={pdetails.patient_id}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label htmlFor="doctor_id">Doctor ID:</Form.Label>
                        <Form.Control
                            type="number"
                            id="doctor_id"
                            name="doctor_id"
                            value={pdetails.doctor_id}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="slot">Slot:</Form.Label>
                        <Form.Control
                            // as="textarea"
                            id="slot"
                            name="slot"
                            value={pdetails.slot}
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
                {responseMessage && (
                    <Alert variant={isrestrue?"success" :"dander"} className="mt-4">
                        {responseMessage}
                    </Alert>
                )}
            </Card.Body>
        </Card>
    </Container>
  )
}

export default BookAppointment