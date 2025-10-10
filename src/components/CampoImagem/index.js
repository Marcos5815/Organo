import styled from "styled-components";


const ImagemContainer = styled.div`
    margin: 24px 0;
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

const Input = styled.input`
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`


const CampoImagem = (props) => {

    const imagemAlterada = (evento) => {
        const file = evento.target.files[0]

        return file ? props.salvarImagem(URL.createObjectURL(file)) : null

    }


    return (
        <ImagemContainer>
            <Label>{props.label}</Label>
            <Input type="file" 
            accept="image/*"
            onChange={imagemAlterada}
            required={props.obrigatorio}
            />

        </ImagemContainer>
    )
}

export default CampoImagem