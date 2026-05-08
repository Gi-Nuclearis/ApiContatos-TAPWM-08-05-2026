const express = require ('express');
const dotaenv = require('dotenv');
const conectarBanco = require('./config/db');
const contatoRoutes = require('./routes/contatoRoutes');

DocumentFragment.cofig();
const app = express();

//Middleware para interpretar JSON no corpo das requisições.
app.use(express.json());

//Rotas principais;
app.use('/api/contatos', contatoRoutes);

//Conectar ao banco e inciar o servidor.
conectarBanco();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando na porta ${PORT}')); 