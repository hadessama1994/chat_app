const express = require ('express')
const socketio = require ('socket.io')
const http = require ('http')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000 //env ou porta 5000

const router = require('./router')

const server = http.createServer(app)

const io = socketio(server) // socket.io

const {addUser, removeUser, getUser, getUsersInRoom} = require ('./user.js')


io.on('connection', (socket) => { //socket conectado com lado client
    socket.on('join', ({name, room}, callback)=> {
        
        const { error, user } = addUser({ id: socket.id, name, room })
        
      
        if(error) {return callback(error)}; //caso algo de errado

            socket.join(user.room);

            socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`}); //mesagem só vai mostrar pro usuario q entrou
            socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` }) //msg vai ser mostrada em todo o chat (broadcast)

            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
            
            
            callback();

})

        socket.on('sendMessage', (message, callback) => { //roda dpois do emit

        const user = getUser(socket.id);
        
            
        io.to(user.room).emit('message', { user: user.name, text: message });
        

        callback();      

    })

    socket.on('disconnect', () =>{
        const user = removeUser(socket.id)

        if (user){
            io.to(user.room).emit('message', {user:'admin', text:`${user.name} has left.`})
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
    })
})


app.use(router) //rota
app.use(cors())

server.listen(PORT, ()=> console.log(`Server has started on port ${PORT}`))

