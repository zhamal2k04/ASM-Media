import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className='contactUs-container'>
        <div className="contactUs-bg-Img"></div>
        <div className="contactUs-form">
        <form action="/sign_up" method="POST">
                <h2>Please leave your contacts</h2>
                <input type="text" class="box" id="name" name="name" placeholder="Введите ваше имя" required />
                <br />
                <input type="text" class="box" id="email" name="email" placeholder="Введите почту" required />
                <br />
                <input type="text" class="box" id="phno" name="phno" placeholder="Введите тел номер" required />
                <br />
                <input type="submit" value="Submit" id="submitBtn" />
        </form>
        </div>
    </div>
  )
}

export default ContactUs