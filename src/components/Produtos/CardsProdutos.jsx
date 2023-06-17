import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    width: 15vw;
    height: 45vh;
    margin: 5vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`

const TitleContainer = styled.span`
    font-size: 2vh;
    background: #E0E0E0;
    color: #333333;
    border-radius: 0px 62px 62px 0px;
    padding: 0.5vh 1.5vh;
    position: absolute;
    top: 0;
    left: 0;
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

const CardsTitulos = styled.span`
    color: #333333;
    font-size: 3vh;
    font-weight: 500;
    width: 80%;
    padding: 2.5vh 0;
    text-align: center;
    justify-self: flex-start;
`

const CardsImagens = styled.div`
    background: #FFFFFF;
    border-radius: 15px;
    color: #333333;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Price = styled.span`
    text-decoration: line-through;
    color: #333333;
    font-size: 1.8vh;
    padding: 0 1vh 0 2vh;
    text-align: center;
`

const DiscountedPrice = styled.span`
    background-color: #FBAF17;
    color: #333333;
    border-radius: 15px 0px 0px 15px;
    padding: 0.5vh 2vw 0.5vh 1vw;
`

const InstallmentContainer = styled.span`
    font-size: 2vh;
    color: #333333;
    background: #F7F7F7;
    border-radius: 15px 15px 0px 0px;
    padding: 1vh 0.5vw;
`

function CardsProdutosComponent({ categoryName, photo, productName, price, discountedPrice, installment }) {
    return (
        <MainContainer>
            <TitleContainer>{categoryName}</TitleContainer>
            <CardsImagens>
                <Image src={photo} />
            </CardsImagens>
            <ContentContainer>
                <CardsTitulos>{productName}<br/></CardsTitulos>
                <PriceContainer>
                    <Price>{price}</Price>
                    <DiscountedPrice>{discountedPrice}</DiscountedPrice>
                </PriceContainer>
                <InstallmentContainer>{installment}</InstallmentContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default CardsProdutosComponent
