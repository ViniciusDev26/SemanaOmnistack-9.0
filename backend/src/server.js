const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

mongoose.connect('mongodb+srv://oministack:123@cluster-7otrh.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

// req.query = acessar o query params (para filtros)
// req.params = acessar route params (para edição e delete)
// req.body = acessar corpo da requisição (criação e update)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')))
app.use(routes);

app.listen(3333);