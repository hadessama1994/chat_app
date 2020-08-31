import React from 'react';
import {Card} from 'react-bootstrap'
import { GoPrimitiveDot} from 'react-icons/go';

// import { Container } from './styles';

function OnlineUsers(props) {
  return (
          <>


<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>People online:</Card.Title>
    
    <Card.Text>
        
            <div>
              <h2>
                {props.users.map(({name}) => (
                  <div key={name}>
                   {name}
                   <GoPrimitiveDot style={{ fill: '#08ff4a' }}/>
                    
                  </div>
                ))}
              </h2>
            </div>
      
    </Card.Text>
    
  </Card.Body>
</Card>

        
      
        </>

  )
}

export default OnlineUsers;