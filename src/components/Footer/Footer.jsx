import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/footer/logo_footer.png'
import image from '../../assets/images/footer/img_footer.png'
import instagram from '../../assets/images/footer/logo-instagram.svg'
import facebook from '../../assets/images/footer/logo-facebook.svg'
import whatsapp from '../../assets/images/footer/logo-whatsapp.svg'

const MainContainer = styled.div`
  background: #202332;
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`

const ContentContainer = styled.div`
  width: 70%;
  padding: 7vh 0;
`

const FooterContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const LogoContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 2;
`

const Logo = styled.img`
  width: 10vw;
  margin-bottom: 3vh;
`

const RedesContainer = styled.div`
  width: 11vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
`

const Icon = styled.img`
  width: 2vw;
`

const CopyrightContainer = styled.div`
  border-top: 1px solid #FBAF17;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
`

const FooterImage = styled.img`
  position: absolute;
  right: 0%;
`

const LogoText = "Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!"
const RedesText = "NOS SIGA NAS REDES"
const Copyright = "© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados"
const Developer = "Desenvolvido por Adalberto Nascimento"

function FooterComponent() {
  return (
    <MainContainer>
      <FooterImage src={image}/>
      <ContentContainer>
        <FooterContainer>
          <LogoContainer>
            <Logo src={logo}/>
            <span>{LogoText}</span>
          </LogoContainer>
          <RedesContainer>
            <span>{RedesText}</span>
            <IconContainer>
              <Icon src={whatsapp}/>
              <Icon src={instagram}/>
              <Icon src={facebook}/>
            </IconContainer>
          </RedesContainer>
        </FooterContainer>
        <CopyrightContainer>
          <span>{Copyright}</span>
          <span>{Developer}</span>
        </CopyrightContainer>
      </ContentContainer>
    </MainContainer>
  )
}

export default FooterComponent
