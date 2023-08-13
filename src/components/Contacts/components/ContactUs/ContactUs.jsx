import React from 'react'
import "./ContactUs.css"
import axios from 'axios';

import { useState } from 'react';
const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/sign_up", {
        name,
        email,
        phno,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      // Обработка ошибок
      setMessage("Произошла ошибка при регистрации");
    }
  };
  
  return (

    <div>
      {/* Форма для регистрации */}
      <input
        type="text"
        placeholder="Имя"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Телефон"
        onChange={(e) => setPhno(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Зарегистрироваться</button>
      {/* Отображение сообщения о регистрации */}
      <p>{message}</p>
    </div>


    // <div className='contactUs-container'>
    //     <div className="contactUs-bg-Img"></div>
    //     <div className="contactUs-form">
    //     <form action="/sign_up" method="POST">
    //             <h2>Please leave your contacts</h2>
    //             <input type="text" class="box" id="name" name="name" placeholder="Введите ваше имя" required />
    //             <br />
    //             <input type="text" class="box" id="email" name="email" placeholder="Введите почту" required />
    //             <br />
    //             <input type="text" class="box" id="phno" name="phno" placeholder="Введите тел номер" required />
    //             <br />
    //             <input type="submit" value="Submit" id="submitBtn" />
    //     </form>
    //     </div>
    // </div>
  )
}

export default ContactUs