import React from 'react';
import styled from 'styled-components';
import data from '../../assets/data/destaques.json'
import background from '../../assets/images/destaques/background.png';
import CardsProdutosComponent from './CardsProdutos';

const Image = styled.img`
    width: 80vw;
`

const MainContainer = styled.div`
    margin: 5vh 0 45vw 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Span = styled.span`
    position: absolute;
    top: 45%;
    left: 35%;
    color: #f6f6f6;
    font-size: 5vh;
    font-weight: 500;
`

const ProdutosContainer = styled.div`
    position: absolute;
    top: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
`

const Title = "Produtos em Destaque"

function ProdutosComponent() {
    return (
        <>
        <MainContainer>
            <Image src={background} alt="Background" />
            <Span>{(Title).toUpperCase()}</Span>
            <ProdutosContainer>
                {data.map((produtos, index) => (
                    <CardsProdutosComponent
                        key={index}
                        categoryName={produtos.categoryName}
                        photo={produtos.photo}
                        productName={produtos.productName}
                        price={produtos.price}
                        discountedPrice={produtos.discountedPrice}
                        installment={produtos.installment}
                    />
                ))}
            </ProdutosContainer>
            </MainContainer>
        </>
    )
}

export default ProdutosComponent
