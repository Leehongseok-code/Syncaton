import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Main from './components/pages/Main';
import Mypage from './components/pages/Mypage';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import Mbti from './components/Mbti';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mbti" element={<Mbti />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
