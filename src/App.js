import './App.css';
import './scss/app.scss'

import React from 'react';

import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
