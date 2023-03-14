import './App.css';
import './scss/app.scss'

import React from 'react';

import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [searchPizza, setSearchPizza] = React.useState('')

  return (
    <div className="wrapper">
      <Header searchPizza={searchPizza} setSearchPizza={setSearchPizza} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchPizza={searchPizza} setSearchPizza={setSearchPizza} />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
