import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
padding: 70px 72px;

`
const Feat = styled.div`
color:  #121E49;

font-family: Poppins;
font-size: 31px;
font-style: normal;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;

`
const Con = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Div1 = styled.div`
border: 2px solid black;
`
const Div2 = styled.div``
const Sub1 = styled.div``
const Sub2 = styled.div``
const Sub3 = styled.div``


function Features() {
  return (
    <Container>
        <Feat>Features</Feat>
        <Con>
            <Div1></Div1>
            <Div2>
                <Sub1></Sub1>
                <Sub2></Sub2>
                <Sub3></Sub3>
            </Div2>
        </Con>

    </Container>
  )
}

export default Features