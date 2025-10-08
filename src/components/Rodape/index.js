import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    background-color: #6278F7;
    height: 150px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const RedesSociais = styled.div`
    img {
        padding: 0 15px;
    }
`

const Assinatura = styled.p`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
`

const Rodape = () => {
    return (

        <RodapeEstilizado>
            <RedesSociais>
                <img src="imagens/fb.png" alt="Facebook"/>
                <img src="imagens/tw.png" alt="Twitter"/>
                <img src="imagens/ig.png" alt="Instagram"/>
            </RedesSociais>
            <img src="imagens/logo.png" alt="Imagem do logo"/>
            <Assinatura>
                Desenvolvido por Marcos.
            </Assinatura>
        </RodapeEstilizado>
    )
}

export default Rodape