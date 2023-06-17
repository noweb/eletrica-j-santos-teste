import React from 'react';
import styled from 'styled-components';
import background from "../../assets/images/home/background.jpg";

const MainContainer = styled.div`

`

const BackgroundImage = styled.img`
  width: 100vw;
`

const OverflowContainer = styled.div`
    color: #fff;
    position: absolute;
    width: 30vw;
    top: 25%;
    left: 15%;
`

const HomeTitle = styled.span`
  font-size: 50px;
  font-weight: 700;
`

const HomeDescriptionContainer = styled.div`
  padding-top: 4vh;
`

const HomeDescription = styled.span`
  font-size: 16px;
  line-height: 2;
`

const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`

const BotaoProdutos = styled.button`
  background: #FBAF17;
  border-radius: 15px;
  color: #202332;
  width: 80%;
  height: 7vh;
  margin: 1vh;
`

const BotaoSobreNos = styled.button`
  border-radius: 15px;
  background: transparent;
  border: 1px solid #fff;
  color: #FFFFFF;
  width: 80%;
  height: 7vh;
  margin: 1vh;
`

const homeTitle = "ILUMINE O SEU DIA A DIA!"
const homeDescription = "Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!"
const BotaoProdutosText = "VEJA NOSSOS PRODUTOS"
const BotaoSobreNosText = "NOS CONHEÇA MELHOR"
const ScrollText = "Role para ver mais"

function HomeComponent() {
  return (
    <MainContainer>
      <BackgroundImage src={background}/>
      <OverflowContainer>
        <HomeTitle>{homeTitle}</HomeTitle>
        <HomeDescriptionContainer>
          <HomeDescription>{homeDescription}</HomeDescription>
        </HomeDescriptionContainer>
        <BotoesContainer>
          <BotaoProdutos>{BotaoProdutosText}</BotaoProdutos>
          <BotaoSobreNos>{BotaoSobreNosText}</BotaoSobreNos>
        </BotoesContainer>
      </OverflowContainer>
    </MainContainer>
  )
  
}

export default HomeComponent