import React from 'react';
import {Routes, Route} from "react-router-dom"
import MyLayout from './Layouts/MyLayout/MyLayout';
import HomePage from './components/HomePage/container/HomePage';
import Contacts from './components/Contacts/container/Contacts';
import AboutPage from './components/About/container/AboutPage';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/about-us' element={<AboutPage/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
