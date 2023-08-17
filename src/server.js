const express = require('express');
const prerender = require('prerender-node');

const app = express();

// Настройте параметры prerender
prerender.set('prerenderToken', 'XG65PIIbltiuZfIMcVkm');
prerender.set('prerenderServiceUrl', 'https://service.prerender.io/');
prerender.set('protocol', 'https');
prerender.set('host', 'u153022.test-handyhost.ru'); // Измените на ваш новый домен
prerender.set('port', 3001);

// Добавьте prerender как middleware перед вашим обработчиком маршрутов
app.use(prerender);

// Ваш обработчик маршрутов
app.get('/', (req, res) => {
  res.send('Your homepage');
});

// Запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
