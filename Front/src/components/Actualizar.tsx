import React, { FC, useState, useEffect } from "react"
import axios from 'axios';
import styled from "@emotion/styled";

type personaje={
    nombre: string,
    apellido:string,
    mail:string
}


const BotonChulo3 = styled.button`
    background: white;
    border-radius: 5px;
    display:flex;
    align-items: center;
    flex-direction: row;
`
const InputChulo = styled.input`
    width: 96%;
    height: auto;
    border-radius: 5px;
    display:flex;
    align-items: center;
    flex-direction: column;
`

const Actualizar: FC<any> = ({personaje}) => {
    let [nombre, setNombre] = useState<string>(personaje.nombre);
    let [apellido, setApellido] = useState<string>(personaje.apellido);
    let [mail, setMail] = useState<string>(personaje.mail);

    function ActualizarDatos(aux: string) {
        axios.post(`http://localhost:6000/actualizar/${aux}`, { nombre, apellido, mail })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div id="datos">
            <div id="borrar">
                <BotonChulo3 onClick={() => { ActualizarDatos(personaje._id) }}>Actualizar</BotonChulo3>
                <InputChulo id="nombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></InputChulo>
                <InputChulo id="Apellido" value={apellido} onChange={(e) => { setApellido(e.target.value) }}></InputChulo>
                <InputChulo id="Mail" value={mail} onChange={(e) => { setMail(e.target.value) }}></InputChulo>
            </div>
        </div>

    )
}
export default Actualizar