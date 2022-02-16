import React from 'react';
import { Column, Container, Typography } from '../GlobalStyle.style';
import { AboutWrapper } from '../styles/About.style';
import Bar from '../assets/bar.png';
import Image from './Image';

const About = () => {
  return (
    <>
      <Container>
        <AboutWrapper>
          <Column flex="0.6">
            <Typography
              as="h2"
              fontSize="31px"
              fontWeght="600"
              lineHeight="62px"
            >
              About Us
            </Typography>
            <Typography
              as="h1"
              fontSize="60px"
              fontWeght="600"
              lineHeight="61px"
              color="var(--primary-bg)"
            >
              What we are Building
            </Typography>
            <Typography
              as="p"
              color="rgba(0,0,0,0.5)"
              lineHeight="26px"
              fontSize="16px"
            >
              3Swap is a decentralized exchange built on various EVM-Compatible
              chains that allows users to swap two tokens for one with little or
              no fees. Asides from the perk of swapping two tokens for one,
              3Swap allows liquidity providers to earn more by allowing the
              provision of liquidity for three tokens.
            </Typography>
          </Column>
          <Column>
            <Image src={Bar} alt="coin" />
          </Column>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
