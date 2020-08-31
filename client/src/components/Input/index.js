
    import React from 'react';
    import {Form, Button, Container, Row, Col} from 'react-bootstrap'
    
    // import { Container } from './styles';
    
    function Input(props) {
   return (

    <>
    
    
        <Form.Group className='chat'>
        <Row>
        <Col xs lg = "10">
    <Form.Control 
    size="lg" 
    type="text" 
    className='radius chat'
    value = {props.message}
    onChange={({ target: { value } }) => props.setMessage(value)}
    onKeyPress={event=> event.key === 'Enter' ? props.sendMessage(event) : null}/>
    
    </Col>
    <Col lg={true}>
        <Button className='radius' variant="primary" size="lg"  onClick={(event)=>{props.sendMessage(event)}} block>Send</Button>{' '}</Col>
    </Row>
    </Form.Group>
    
 </>
)
      
    }
    
    export default Input;
    
    