import React, { FC } from 'react';
import styled from "@emotion/styled";

const ZonaBotones = styled.div`
    width: 100%;
    height:20%;
    background-color: rgb(228, 248, 247);
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

`
const Botones: FC=({children})=>{
    return( 
        <ZonaBotones>
            {children}
        </ZonaBotones>
    )
}

export default ZonaBotones;