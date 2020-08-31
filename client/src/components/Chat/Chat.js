import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from '../Join/Join'
import { useEffect, useState } from 'react';
import io from 'socket.io-client'
import {Form, Container, Row, Col} from 'react-bootstrap'
import HeaderChat from '../Header-Chat/index'
import Input from '../Input/index'
import Messages from '../Messages/index'
import OnlineUsers from '../OnlineUsers/index'
import ScrollToBottom from 'react-scroll-to-bottom'

let socket

const Chat = (props) => {



  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  

  const ENDPOINT = 'localhost:5000'

  useEffect(()=>{ //userEffect1

      const name = localStorage.getItem('name')
      const room = localStorage.getItem('room')
      setName (name)
      setRoom (room)

     socket = io (ENDPOINT)
     socket.emit('join', {name, room}, () =>{
        
     }) //conexao socket

     return() =>{
         socket.emit('disconnect')
         socket.off(); //CLIENT disconectado
     }
        
    
        },[ENDPOINT, localStorage.getItem('name'), localStorage.getItem('room')])

        //lidar com mensagens   
        
            useEffect(()=>{ 
            socket.on('message', message=>{
            setMessages(messages => [...messages, message])
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users);
          });

    },[])

        
    

    const sendMessage = (event) =>{
        event.preventDefault()
        if (message){
            socket.emit('sendMessage', message, ()=> setMessage(''))
            
        }
    }

    return (
        <>
    
    <h1 className="display-1 text-center text-light">Simple Chat</h1>
    <h4 class="display-7 text-center text-light">by <a className='text-light' href='https://github.com/hadessama1994'><b>Eduardo Nicolli</b></a></h4>
    <div className='container mt-5'  >
        <Row>
            
            

    <Col  sm={7}><HeaderChat room={room}/>
    <Container className='chat-bg' >
        
      
    <ScrollToBottom className='messages overflow-auto'> <Container>
          
    <Messages messages={messages} name={name}/></Container></ScrollToBottom>
  
  </Container>

  <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/></Col>
  <Col><OnlineUsers users={users}/></Col>
  </Row>

    
  </div>

  
            
            
           
              
</>
    )
}

export default Chat