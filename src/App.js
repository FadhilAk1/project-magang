import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Login from './pages/login';
import Letter_out1 from './pages/letter_out1';
import Letter_out2 from './pages/letter_out2';
import Letter_out3 from './pages/letter_out3';
import Letter_out4 from './pages/letter_out4';
import List_document from './pages/List_document2';
import Profil from './pages/profil';
import Letterin from './pages/letterin';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage_login from './pages/homepage_login';
import List_document1 from './pages/List_document1';
import List_document2 from './pages/List_document2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/letterin' element={<Letterin/>}/>
        <Route path='/afterlogin' element={<Homepage_login/>}/>
        <Route path='/profile' element={<Profil/>}/>
        <Route path='/list_letterin' element={<List_document2/>}/>
        <Route path='/list_letterout' element={<List_document1/>}/>
        <Route path='/letterin' element={<Letterin/>}/>
        <Route path='/letterout1' element={<Letter_out1/>}/>
        <Route path='/letterout2' element={<Letter_out2/>}/>
        <Route path='/letterout3' element={<Letter_out3/>}/>
        <Route path='/letterout4' element={<Letter_out4/>}/>
      </Routes>
    </Router>
  );
}

export default App;
