import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import logo from '../img/logo.gif';
import headerBell from '../img/bell.png';
import '../css/App.css';
import cuenta from '../img/cuenta.png';
import lupa from '../img/lupa.png';
import españa from '../img/españa.png';
import options from '../img/options.png';
import carrito from '../img/carrito.png';
import Home from './Home.jsx';
import Auth from './Auth.jsx';
import Perfil from './Perfil.jsx';


function App() {
  var logged = true;
  return (
    <Router>
    <div className="App">
    {logged ? <div id='header'>
        <div className='header-top'>
          <div className='header-divisor'>
            <div className='header-business'>
                <img className='header-logo' src={logo} alt="logo"/>
            </div>
            <img className='header-bell' src={headerBell} alt='Notifications'/>
          </div>
          <div className='header-divisor'>
            <div className='header-central'>
              <input className='header-search' placeholder='Buscar...'></input>
              <button className='header-button'><img className='header-button-img' src={lupa} alt="search"/></button>
            </div>
            <div className='header-new-post'><span className='header-text-np'>+</span></div>
          </div>
          <div className='header-divisor'>
            <div className='header-lang'><img className='header-lang-img' src={españa} alt='lang'/></div>
            <img className='header-options' src={options} alt='lang'/>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='header-sub-bottom'>
            <div className="sub"style={{marginLeft: '16.6666%'}}>Chats</div>
            <div className="sub">Directos</div>
            <div className="sub">Mundo</div>
            <div className="sub">Amigos</div>
            <div className="sub">Noticias</div>
          </div>
          <img className='cuenta' src={cuenta} alt="cuenta"/>
          <div>
            <img className='carrito' src={carrito} alt="carrito"/>
          </div>
        </div>
      </div> : <div></div>}
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Perfil />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
