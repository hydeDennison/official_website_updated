import React from 'react'
import styled from 'styled-components'
import Bg from '../assets/backg.png'



const Container = styled.div`
padding-top: 50px;
display: flex;
align-items: center; 
justify-content: space-between;


@media screen and (max-width: 900px){
    flex-direction: column;
}
`
const Div1 = styled.div` 
padding: 70px 72px;


`
const Div2 = styled.div`
margin-right: 50px;
background-image: url(${Bg});

/* background-position: top 0% right ;
background-repeat: no-repeat;
background-blend-mode: lighten; */
border: 2px solid black;

`

const  Img = styled.img`
    
`
const Ab = styled.div` 
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 31px;
line-height: 150%;
`
const BigT = styled.div`
margin-top: 20px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 62px;
/* or 103% */


color: #4500A0;
`
const SmallT = styled.div`
margin-top: 20px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 35px;
/* or 165% */


color: rgba(0, 0, 0, 0.7);

`

function About() {
    return (
        <Container>
            <Div1>
                <Ab>About Us</Ab>
                <BigT>  What we are <br/> Building</BigT>
                <SmallT> 3Swap is a decentralized exchange built on various <br/> EVM-Compatible chains that allows users to swap two <br/> tokens for one with little or no fees. Asides from the <br/> perk of swapping two tokens for one, 3Swap allows <br/> liquidity providers to earn more by allowing the <br/> provision of liquidity for three tokens.
                </SmallT>
            </Div1>
            <Div2>

                {/* <Img src={Coin}/> */}
            </Div2>
        </Container>
    )
}

export default About