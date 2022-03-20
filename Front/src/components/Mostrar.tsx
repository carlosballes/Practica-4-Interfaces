import React, { FC, useState, useEffect } from "react"
import axios from 'axios';
import styled from "@emotion/styled";
import Actualizar from "./Actualizar";

const Bloque = styled.div`
    width: 150px;
    height: auto;
    border-radius: 5px;
    background: white;
`
const Bloque2 = styled.div`
    width: fit-content;
    height: auto;
    border-radius: 5px;
    background: white;
`
const BotonChulo = styled.button`
    background: white;
    border-radius: 5px;
    margin: 20px;
    
`

const BotonChulo3 = styled.button`
    background: white;
    border-radius: 5px;
    display:flex;
    align-items: center;
    flex-direction: row;
`


const Mostrar: FC = () => {
    let [datos, setDatos] = useState<any>();
    let [nombre, setNombre] = useState<string>("");
    let [apellido, setApellido] = useState<string>("");
    let [mail, setMail] = useState<string>("");
    

    let [visible, setVisible] = useState<boolean>(false);

    function MostrarDatos() {
        axios.get(`http://localhost:6000/formulario`, {})
            .then(res => {
                console.log(res);
                console.log(res.data);
                setDatos(res.data)
            })
            setVisible(true)
    }

    function BorrarDatos(aux: string) {
        axios.delete(`http://localhost:6000/formulario/${aux}`, {})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    return (
        <div id="pantalla">
            <div id="buscador">
                <BotonChulo id="Mostrar" onClick={() => {MostrarDatos(); setVisible(true)}} ><b>Mostrar</b> </BotonChulo>
                <BotonChulo onClick={()=> setVisible(false)}><b>Editar</b></BotonChulo>
                {visible&&<Bloque>
                    {datos !== undefined && datos?.map((e: any, k: number) =>
                        <div id="datos">
                            <div id="borrar">
                                <BotonChulo3 onClick={() => { BorrarDatos(datos[k]?._id) }}>Borrar</BotonChulo3>
                                <div id="Nombre">Nombre:{datos[k]?.nombre}</div>
                            </div>
                            <div id="Apellido">Apellido:{datos[k]?.apellido}</div>
                            <div id="Mail">Mail:{datos[k]?.mail}</div>
                        </div>
                    )}
                </Bloque>}


            </div>

            <div id="actualizador">
                {!visible&&<Bloque2>
                    {datos !== undefined && datos?.map((e: any, k: number) =>
                        <Actualizar personaje={e}></Actualizar>
                    )}
                </Bloque2>}
            </div>


        </div>
    )
}
export default Mostrar