import React from 'react';
import Coin from '../assets/coin.png';
import { Column, Container, Typography } from '../GlobalStyle.style';
import { BannerWrapper, ImageWrapper } from '../styles/Banner.style';
import Image from './Image';
import Button from './Button';

const Banner = () => {
  return (
    <>
      <Container>
        <BannerWrapper>
          <Column flex="0.6">
            <Typography
              as="h1"
              fontSize="60px"
              lineHeight="70px"
              color="rgba(0,0,0,0.8)"
              margin="30px 0 0 0"
            >
              One-Click, More Swaps, Less Fees.
            </Typography>
            <Typography
              as="p"
              fontSize="16px"
              lineHeight="26px"
              color="rgba(0,0,0,0.5)"
            >
              {' '}
              Decentralized exchange with extra powers. Swap two tokens for one.
            </Typography>
            <Button
              label="Launch App"
              bgColor="#4500a0"
              color="#fff"
              borderRadius="15px"
              padding="13px 25px"
            />
          </Column>
          <Column>
            <ImageWrapper>
              <Image img={Coin} alt="3swap" />
            </ImageWrapper>
          </Column>
        </BannerWrapper>
      </Container>
    </>
  );
};

export default Banner;
