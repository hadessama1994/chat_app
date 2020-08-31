import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/index'
import { css } from 'glamour';

// import { Container } from './styles';

function Messages(props) {
    
   
  return (
    

    <ScrollToBottom>
       {props.messages.map((message, i) => <div key={i}><Message message={message} name={props.name}/></div>)} 
    </ScrollToBottom>

  )
}

export default Messages;