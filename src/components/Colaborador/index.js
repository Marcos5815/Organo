import styled from "styled-components";

const ColaboradorEstilizado = styled.div`
    width: 280px
`

const Cabecalho = styled.div`
    background-color: #F0F0F0;
    min-height: 100px;
    border-radius: 10px 10px 0px 0px;
    display:flex;
    align-items: center;
    justify-content: center
`

const ColaboradorImg = styled.img`
    width: 95px;
    border-radius: 100px;
    height: 85px;
    position: relative;
    bottom: -50%;
`

const Rodape = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
`

const RodapeH4 = styled.h4`
    color: #6272F7;
    font-size: 18px;
    line-height: 22px;

`

const RodapeH5 = styled.h5`
    font-weight: 700;
`


const Colaborador = ({nome, imagem, cargo}) => {
    return (
        <ColaboradorEstilizado>
            <Cabecalho>
                <ColaboradorImg src={imagem} alt={nome}/>
            </Cabecalho>
            <Rodape>
                <RodapeH4>{nome}</RodapeH4>
                <RodapeH5>{cargo}</RodapeH5>
            </Rodape>
        </ColaboradorEstilizado>
    )
}

export default Colaborador