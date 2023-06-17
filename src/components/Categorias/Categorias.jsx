import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/categorias/background.png';
import data from "../../assets/data/categorias.json";
import CardsCategoriasComponent from './CardsCategorias';

const Image = styled.img`
  width: 100vw;
`

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Span = styled.span`
  position: absolute;
  top: 15%;
  left: 43%;
  color: #f6f6f6;
  font-size: 5vh;
  font-weight: 500;
`

const CategoriasContainer = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`

const Title = "CATEGORIAS"

function CategoriasComponent() {
  return (
    <MainContainer>
      <Image src={background} alt="Background" />
      <Span>{Title}</Span>
      <CategoriasContainer>
        {data.map((categoria, index) => (
          <CardsCategoriasComponent
            key={index}
            categoryName={categoria.categoryName}
            categoryPhoto={categoria.categoryPhoto}
          />
        ))}
      </CategoriasContainer>
    </MainContainer>
  );
}

export default CategoriasComponent;
