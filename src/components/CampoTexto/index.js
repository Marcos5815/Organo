import styled from "styled-components";

const Campotexto = styled.div`
    margin: 24px 0;
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

const Input = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`


const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <Campotexto>
            <Label>{props.label}</Label>
            <Input placeholder={placeholderModificada}/>
        </Campotexto>
    )
}

export default CampoTexto