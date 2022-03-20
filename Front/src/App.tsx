import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Datos from './components/Datos';
import Mostrar from './components/Mostrar';
import styled from "@emotion/styled";
import ZonaBotones from './containers/Botones';
import Contenido from './containers/Contenido';

const BotonChulo = styled.button`
    background: white;
    border-radius: 5px;
    height: 50px;
`

function App() {
  let [visible, setVisible] = useState<boolean>(true);
  return (
    <div >
      
      <div className="App">
        <ZonaBotones>
          <BotonChulo onClick={()=>setVisible(true)}>FORMULARIO</BotonChulo>
          <BotonChulo onClick={()=>setVisible(false)}>Datos Formulario</BotonChulo>
        </ZonaBotones>
        <Contenido>
          {visible && <Datos/>}
          {!visible &&<Mostrar/>}
        </Contenido>
        
      </div>
    </div>
  );
}

export default App;
