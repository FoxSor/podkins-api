
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const Model = require('./model')

mongoose.connect(`mongodb+srv://username:username@podkins.9xaed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(db => console.log("db conect", db.connection.host))
    .catch(err => console.error(err));

const app = express();

app.use(cors());
  
app.get("/", (req, res) => {
  res.json({mensaje: "Hello new new new new world"});
});
  
app.get("/get-model", (req, res) => {
  const newModel =  new Model({
    nombre: "nombre"
  })
  newModel.save()
    .then(result => res.send(result))
    .catch(err => console.error(err))
});

app.get("/get-models", (req, res) => {
  Model.find()
    .then(result => res.send(result))
    .catch(err => console.error(err))
});


const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on port, asf`));