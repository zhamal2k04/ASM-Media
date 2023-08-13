import React from 'react'
import "./ContactUs.css"
import axios from 'axios';
import { useState } from 'react';

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/sign_up", {
        name,
        email,
        phno,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Произошла ошибка при регистрации");
    }
  };
  
  return (



    <div className='contactUs-container'>
        <div className="contactUs-bg-Img"></div>
        <div className="contactUs-form">
        <form action="/sign_up" method="POST">
                <h2>Please leave your contacts</h2>
                <input type="text" onChange={(e) => setName(e.target.value)} class="box" id="name" name="name" placeholder="Введите ваше имя" required />
                <br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} class="box" id="email" name="email" placeholder="Введите почту" required />
                <br />
                <input type="text" onChange={(e) => setPhno(e.target.value)} class="box" id="phno" name="phno" placeholder="Введите тел номер" required />
                <br />
                <input type="submit" onClick={handleSignUp} value="Submit" id="submitBtn" />
                <p>{message}</p>
        </form>
        </div>
    </div>
  )
}

export default ContactUs