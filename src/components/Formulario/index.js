import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const Secao = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`

const Form = styled.form`
    max-width: 80%;
    background-color: #F2F2F2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0,0,0, 0.08)
`

const TituloFormulario = styled.h2``

const Formulario = () => {
    return (
        <Secao>
            <Form>
                <TituloFormulario>Preencha os dados para criar o card do colaborador</TituloFormulario>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </Form>
        </Secao>
    )
}

export default Formulario