import React from 'react';
import { Column, Container, Typography } from '../GlobalStyle.style';
import { FeatureHeading, FeaturesWrapper } from '../styles/Features.style';
import { FiExternalLink } from 'react-icons/fi';
import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
} from 'react-icons/fa';
import NavLink from './NavLink';

function Features() {
  return (
    <>
      <Container>
        <Typography
          className="title"
          as="h2"
          fontSize="18px"
          fontWeight="600"
          lineHeight="150%"
          color="rgba(0, 0, 0, 0.8)"
          margin="0 0 0 8px"
        >
          Features
        </Typography>
        <FeaturesWrapper>
          <Column flex="0.6">
            <FeatureHeading>
              <Typography
                as="h1"
                fontSize="50px"
                lineHeight="120%"
                color="var(--primary-bg)"
              >
                We are a community based project
              </Typography>
              <Typography
                as="p"
                fontSize="16px"
                color="#0303037f"
                lineHeight="26px"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Typography>
              <div className="social__links">
                <NavLink url="/" label="" icon={<FaTwitter />} />
                <NavLink url="/" label="" icon={<FaFacebookF />} />
                <NavLink url="/" label="" icon={<FaDiscord />} />
                <NavLink url="/" label="" icon={<FaTelegramPlane />} />
              </div>
            </FeatureHeading>
          </Column>
          <Column flex="0.4">
            <div className="feature">
              <Typography
                as="h2"
                fontSize="16px"
                lineHeight="31px"
                fontWeight="600"
                color="var(--primary-bg)"
              >
                Read our whitepaper <FiExternalLink />
              </Typography>
              <Typography
                as="p"
                fontSize="14px"
                color="#0303037f"
                lineHeight="26px"
              >
                lorem Ipsum is simply dummy text of the printing dummy text of.{' '}
              </Typography>
            </div>
            <div className="feature">
              <Typography
                as="h2"
                fontSize="16px"
                lineHeight="31px"
                fontWeight="600"
                color="var(--primary-bg)"
              >
                Investors note <FiExternalLink />
              </Typography>
              <Typography
                as="p"
                fontSize="14px"
                color="#0303037f"
                lineHeight="26px"
              >
                lorem Ipsum is simply dummy text of the printing dummy text of.{' '}
              </Typography>
            </div>
            <div className="feature">
              <Typography
                as="h2"
                fontSize="16px"
                lineHeight="31px"
                fontWeight="600"
                color="var(--primary-bg)"
              >
                Events <FiExternalLink />
              </Typography>
              <Typography
                as="p"
                fontSize="14px"
                color="#0303037f"
                lineHeight="26px"
              >
                lorem Ipsum is simply dummy text of the printing dummy text of.{' '}
              </Typography>
            </div>
          </Column>
        </FeaturesWrapper>
      </Container>
    </>
  );
}

export default Features;
