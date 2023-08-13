import { useEffect, useState } from 'react';
import axios from 'axios';
import "./ContactUs.css"

function ContactUs() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', {
        name,
        email,
        phone,
      });
      console.log(response.data.message); // Выводим сообщение в консоль
  
      // Обновляем состояние users после успешной регистрации
      setUsers([...users, { name, email, phone }]);
  
      // Сбрасываем введенные значения
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Произошла ошибка при регистрации', error);
    }
  };

  return (
    <div className='contactUs-container'>

    <div className="contactUs-bg-Img"></div>

      <div className='contactUs-form'>
        <form onSubmit={handleSignUp}>
        <h2>Please leave us your Contacts</h2>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Введите ваше имя'
            id='name'
          />
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Введите вашу почту'
            id='email'
          />
          <input
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder='Введите тел номер'
            id='phone'
          />
          <button type='submit' id='submitBtn'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
