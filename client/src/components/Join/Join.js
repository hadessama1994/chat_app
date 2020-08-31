import React, {useEffect, useState} from 'react'
import{Link} from 'react-router-dom'
import { Button, Card, Form, InputGroup, FormControl, Row, Col, Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/styles.css'
import Chat from '../Chat/Chat'
import { propTypes } from 'react-bootstrap/esm/Image';

function Join () {

    const [name, setName] = useState ('')
    const [room, setRoom] = useState ('')

    useEffect(()=>{
      localStorage.setItem('name', name)   
      localStorage.setItem('room', room)  
    }
    , [name, room, null]) //toda vez que inserir o name ou room, vai ser salvo


    return (
        <>
        
        <div className="container">
  <div className="center">
    <p></p>
  </div>
</div>  
        
        <Container fluid>
        <Row className="justify-content-md-center"><Col xs lg="1"><h1 className="mb-3 text-light">Join</h1></Col></Row>


        <Row className="justify-content-md-center">       
        
        <Col xs lg="2">
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" //set name to state
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setName(e.target.value) 
          }
        />
        </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Room</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setRoom(e.target.value)}
        />
           
        </InputGroup>
        <Row><Col><a href="/chat"><Button variant="primary" size="lg" block>Enter</Button></a></Col></Row>
        </Col>
        
        </Row>

        </Container>

        
          

       
        </>
    )
}


export default Join