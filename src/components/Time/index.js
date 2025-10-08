import styled from "styled-components";
import Colaborador from "../Colaborador";
import { useEffect } from "react";

const TimeEstilizado = styled.section`
    text-align: center;
    padding: 32px;
    background-color: ${props => props.corSecundaria}
`

const NomeEstilizado = styled.h3 `
    font-size: 32px;
    border-bottom: 4px solid ${props => props.corPrimaria};
    display: inline-block;
    padding-bottom: 8px;
`

const TimeColaboradores = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`


const Time = (props) => {

    return (

        props.colaboradores.length > 0 && <TimeEstilizado corSecundaria={props.corSecundaria}>
            <NomeEstilizado corPrimaria={props.corPrimaria}>{props.nome}</NomeEstilizado>
            
            <TimeColaboradores>

                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </TimeColaboradores>
        </TimeEstilizado>
    )
}

export default Time