import React from 'react';
import {ListGroup, Container, Col, Row} from 'react-bootstrap'
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import '../../../src/styles.css'

function HeaderChat(props) {
  return (

    
    
     <ListGroup as="ul" className='radius'>
          <ListGroup.Item as="li" active >
            <Row >
                <Col >
            <b>{props.room}</b>
            <GoPrimitiveDot style={{ fill: '#08ff4a' }}/>
                </Col>
                <a href='/'><Col className='d-flex flex-row-reverse pt-1'><AiOutlineClose style={{ fill: 'white' }}/> 
                </Col></a>
            </Row>
            
    
        </ListGroup.Item>
        
     </ListGroup>
     
    
  

  )
}

export default HeaderChat;