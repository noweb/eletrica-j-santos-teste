import React from 'react';
import styled from 'styled-components';
import image1 from '../../assets/images/header/image1.png'
import image2 from '../../assets/images/header/image2.png'
import data from '../../assets/data/categorias.json'

const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  background: #FFFFFF;
  flex-direction: row;
`
const HeaderItemsContainer = styled.div`
  display: flex;
  background: #FBAF17;
  border-radius: 150px 0px 0px 150px;
  width: 50%;
  /* height: 10vh; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1.5%;
  float: right;
`;

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 60%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #202332;
`

const ImagesContainer = styled.div`
  display: flex;
  width: 24%;
  height: 100%;
  margin: 0;
  justify-content: space-between;
`

const Image1 = styled.img`
  /* width: 40%; */
  height: 100%;
  object-fit: contain;
  margin: 0;

  img {
    width: auto;
    height: auto;
  }
`

const Image2 = styled.img`
  height: 60%;
  object-fit: contain;
  margin: 2vh 0;

  img {
    width: auto;
    height: auto;
  }
`

const Contact = styled.button`
  background: #202332;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
`;

function HeaderComponent() {
  return (
    <HeaderContainer>
      <ImagesContainer>
        <Image1 src={image1}/>
        <Image2 src={image2}/>
      </ImagesContainer>
      <HeaderItemsContainer>
        <ListContainer>
          <span>Home</span>
          <span>Categorias</span>
          <span>Sobre</span>
          <span>Localização</span>
        </ListContainer>
        <Contact>Contato</Contact>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
}

export default HeaderComponent;
