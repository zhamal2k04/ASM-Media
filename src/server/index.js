const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')


app.post("/register", (req, res) => {
    const { name, email, phone } = req.body;
  
    // Создание новой записи пользователя в базе данных
    const newUser = new UserModel({ name, email, phone });
    newUser
      .save()
      .then(savedUser => {
        res.json({ message: "Пользователь успешно зарегистрирован", user: savedUser });
      })
      .catch(err => {
        res.status(500).json({ error: "Произошла ошибка при регистрации пользователя", details: err });
      });
  });
  

app.get("/getUsers", (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log('http://localhost:3001')
})