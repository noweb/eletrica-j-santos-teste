import React from "react";
import styled from "styled-components";
import background from '../../assets/images/quem_somos/img_loja.png'

const MainContainer = styled.div`
    background: #F7F7F7;
    margin-top: 70vh;
    display: flex;
    padding-top: 5vh;
`

const BackgroundImage = styled.img`
    width: 50%;
`

const TitleContainer = styled.div`
    position: absolute;
    color: #202332;
    font-size: 3vw;
    font-weight: 600;
    right: 35vw;
`

const ContentContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15vh 20vh 0 2vh;
`

const TextContainer = styled.div`
    color: #333333;
    line-height: 2;
`

const ButtonContainer = styled.button`
    width: 45%;
    margin-top: 5vh;
`

const Title = "SUA MELHOR OPÇÃO"
const Description = "Desde 1970 somos especializados em materiais elétricos, sendo uma das principais distribuidoras do setor. Oferecemos os melhores produtos, com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia. Aqui você irá encontrar lustres, luminárias, utilidades domésticas, ferramentas, acessórios, lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada padrão Eletropaulo, materiais elétricos em geral, equipamentos de segurança e comunicação."
const ButtonText = "Saiba mais sobre nós"

function QuemSomosComponent() {
    return (
        <MainContainer>
            <BackgroundImage src={background}/>
            <TitleContainer>{Title}</TitleContainer>
            <ContentContainer>
                <TextContainer>{Description}</TextContainer>
                <ButtonContainer>{(ButtonText).toUpperCase()}</ButtonContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default QuemSomosComponent