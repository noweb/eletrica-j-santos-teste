import React from 'react';
import styled from 'styled-components';
import HeaderComponent from './components/Header/Header'
import HomeComponent from './components/Home/Home';
import FooterComponent from './components/Footer/Footer';
import CategoriasComponent from './components/Categorias/Categorias';
import ProdutosComponent from './components/Produtos/Produtos';
import DuvidasComponent from './components/Duvidas/Duvidas';
import QuemSomosComponent from './components/Quem Somos/QuemSomos';

function App() {
  const Page = styled.div`
    background: #FFFFFF;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  `

  return (
    <Page>
      <HeaderComponent />
      <HomeComponent />
      <ProdutosComponent />
      <CategoriasComponent />
      <QuemSomosComponent />
      <DuvidasComponent />
      <FooterComponent />
    </Page>
  )
}

export default App
