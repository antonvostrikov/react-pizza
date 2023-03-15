import './App.css';
import './scss/app.scss'

import React from 'react';

import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export const PizzaContext = React.createContext()

function App() {
  const [searchPizza, setSearchPizza] = React.useState('')

  return (
    <div className="wrapper">
      <PizzaContext.Provider value={{ searchPizza, setSearchPizza }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home  />} />
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </div>
        </div>
      </PizzaContext.Provider>
    </div>
  );
}

export default App;
