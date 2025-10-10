import styled from "styled-components";


const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

const Select = styled.select`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`


const ListaSuspensa = (props) => {

    return (
        <div>
            <Label>{props.label}</Label>
            <Select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option valur=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </Select>
        </div>
    )
}

export default ListaSuspensa;