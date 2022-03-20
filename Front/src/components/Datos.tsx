import React, { FC, useState, useEffect } from "react"
import axios from 'axios';
import styled from "@emotion/styled";

const InputChulo = styled.input`
    width: 100%;
    height: auto;
    margin: 5px;
    border-radius: 5px;
    display:flex;
    align-items: center;
    flex-direction: column;
`

const BotonChulo = styled.button`
    background: white;
    border-radius: 5px;
`

const Datos: FC = () => {
    let [nombre, setNombre] = useState<string>("");
    let [apellido, setApellido] = useState<string>("");
    let [mail, setMail] = useState<string>("");

    function EnviarDatos() {
        axios.post(`http://localhost:6000/formulario`, { nombre, apellido, mail })
       
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
return (
    <div id="pantalla">
        <div id="buscador">
                <InputChulo id="nombre" placeholder="Introduce el nombre" onChange={(e) => { setNombre(e.target.value) }}></InputChulo>
                <InputChulo id="apellido" placeholder="Introduce el apellido"onChange={(e) => { setApellido(e.target.value) }} ></InputChulo>
                <InputChulo id="email" placeholder="Introduce el email"onChange={(e) => { setMail(e.target.value) }} ></InputChulo>
                <BotonChulo id="enviar" onClick={() => { EnviarDatos() }}> <b>Enviar</b></BotonChulo>
        </div>
    </div>
)
}
export default Datos