import React from 'react';
import {Routes, Route} from "react-router-dom"
import MyLayout from './Layouts/MyLayout/MyLayout';
import HomePage from './components/HomePage/container/HomePage';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
