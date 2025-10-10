import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import CampoImagem from "../CampoImagem"

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

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [imagemReset, setImagemReset] = useState(Date.now())
    const [time, setTime] = useState("")

    const aoSalvar = (event) => {
        event.preventDefault()

        props.aoColaboradorCadastrado(
            {
                nome,
                cargo,
                imagem,
                time
            }
        )



        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

        setImagemReset(Date.now());
    }

    return (
        <Secao>
            <Form onSubmit={aoSalvar}>
                <TituloFormulario>Preencha os dados para criar o card do colaborador</TituloFormulario>
                <CampoTexto
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
                />

                <CampoTexto 
                obrigatorio={true}
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}  
                />

                <CampoImagem  
                key={imagemReset}
                label="Foto de perfil" 
                salvarImagem={valor => setImagem(valor)} 
                />

                <ListaSuspensa 
                obrigatorio={true} 
                itens={props.times} 
                label="Time"
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </Form>
        </Secao>

        
    )
}

export default Formulario