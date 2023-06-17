import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
    width: 15vw;
    height: 20vw;
    margin: 2vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardsTitulos = styled.span`
    color: #FBAF17;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`

const CardsImagens = styled.div`
    background: #FBAF17;
    width: 100%;
    height: 80%;
    border-radius: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.image`

`

function CardsCategoriasComponent({ categoryName, categoryPhoto }) {
    return (
        <CardsContainer>
            <CardsTitulos>{categoryName}</CardsTitulos>
            <CardsImagens>
                <img src={categoryPhoto} />
            </CardsImagens>
        </CardsContainer>
    )
}

export default CardsCategoriasComponent