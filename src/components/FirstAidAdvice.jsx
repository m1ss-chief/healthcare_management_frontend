import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert,Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firstaid.css';
import { getFirstaid } from '../api/api';

const FirstAidAdvice = () => {
    const [issue, setIssue] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (event) => {
        setIssue(event.target.value);
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log("in sub");
        // const responseMessage = `Providing first aid advice for: ${issue}`;
        const res= await getFirstaid(issue);
        console.log(res);
        if(res.success){

            setResponseMessage(res.advice);
        }
    };

    return (
        <Container>
        <Card className="card">
            <Card.Body>
                <Card.Title className="text-center mb-4">First Aid Advice</Card.Title>
                <Form id="firstAidForm" onSubmit={handleSubmit} >
                <Stack direction='vertical' gap={3}>
                    <Form.Group>
                        <Form.Label htmlFor="issue">Describe your issue:</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="issue"
                            name="issue"
                            value={issue}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        // onClick={submitForm}
                    >
                        Submit
                    </Button>
                    </Stack>
                </Form>
                {responseMessage && (
                    <Alert variant="success" className="mt-4">
                        <div className='text-start'>

                        {responseMessage.split(";").map((row,i)=>{
                            return <div key={i}>{row}</div>
                        })}
                        </div>
                    </Alert>
                )}
            </Card.Body>
        </Card>
    </Container>
    );
};

export default FirstAidAdvice;
