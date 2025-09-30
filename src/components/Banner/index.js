import styled from "styled-components";

const BannerComponent = styled.header`
    background-color: #6278F7;
    text-align: center;
`

const Imagem = styled.img`
    max-width: 100%;
`

export const Banner = () => {
    return (
        <BannerComponent>
            <Imagem src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </BannerComponent>
    )
}

export default Banner;