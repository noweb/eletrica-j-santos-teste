import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/duvidas/background.png'

const MainContainer = styled.div`
    position: relative;
    display: inline-block;
    margin: 5vh 0 0 0;
`

const OverflowButton = styled.button`
    background: #FBAF17;
    border-radius: 15px;
    color: #202332;
    position: absolute;
    top: 70%;
    left: 50%;
`

const Image = styled.img`
    width: 100vw;
`

const buttonText = "ACIONE NOSSO TELEVENDAS"

function DuvidasComponent() {
    return (
        <MainContainer>
            <Image src={background} />
            <OverflowButton>{buttonText}</OverflowButton>
        </MainContainer>
    )
}

export default DuvidasComponent
