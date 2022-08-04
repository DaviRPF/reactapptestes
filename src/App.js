import React, { useState, Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";

import BootstrapNavBar from './components/bootstrap/BootstrapNavBar';
import BootstrapCarousel from './components/bootstrap/BootstrapCarousel'

import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import OriCarousel from './components/bootstrap/OriCarousel';
import Item from './components/Item';
import { ReactPropTypes } from 'react';
import Evento from './components/Evento';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';

function App(){
  
  const [nome, setNome] = useState();

  return(

    
    <div>
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}></SeuNome>
        <button onClick={() => console.log(nome)}></button>
    </div>

  );
}




export default App;