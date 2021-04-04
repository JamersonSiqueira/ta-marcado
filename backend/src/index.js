const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
server.use(express.json());


const TaskRoutes = require('./routes/TaskRoutes');
const TaskUser = require('./routes/TaskUser');
server.use('/task', TaskRoutes);
server.use('/user', TaskUser);

server.listen(3333, () => {
    console.log("Servidor online na porta 3333!");
});