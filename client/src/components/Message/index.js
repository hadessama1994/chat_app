import React from 'react';
import { AiFillBehanceSquare } from 'react-icons/ai';
import {Alert, Toast, Row, Col, Container} from 'react-bootstrap'

// import { Container } from './styles';

function Message(props) {

    let isSentByCurrentUser = false //checar quem está enviando a mensagem para exibir separado 
    const trimmedName = props.name.trim().toLowerCase()

    if (props.message.user === trimmedName){
        isSentByCurrentUser = true
    }


    return (
        isSentByCurrentUser //if is current user render it // mensagem enviada pelo usuario
        ? (<>
                <div className='mt-2 mb-3'>
                    <Toast>
                    <Toast.Header className='bg-dark text-white'>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{trimmedName}</strong>
                    
                </Toast.Header>
                <Toast.Body>{props.message.text}</Toast.Body>
            </Toast>
            </div>
            

           </> 
        )

    : //is not current user = render it , mensagens enviadas por outras pessoas, devem ser alinhada em outro lado para nao confudir
    (<>
    <div className='d-flex flex-row-reverse mt-2'>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{props.message.user}</strong>
                    
                </Toast.Header>
                <Toast.Body>{props.message.text}</Toast.Body>
            </Toast>
            </div>
       </> )
        
      )
}

export default Message;