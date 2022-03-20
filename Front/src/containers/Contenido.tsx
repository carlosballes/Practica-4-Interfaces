import React, { FC } from 'react';
import styled from "@emotion/styled";

const La_zona = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    

`

const Contenido: FC=({children})=>{
    return( 
        <La_zona>
            {children}
        </La_zona>
    )
}

export default Contenido;