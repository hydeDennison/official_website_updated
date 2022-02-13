import Image from 'next/image';
import Link from 'next/link';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Tabs from '../../components/Tab';
import {
  AppHeader,
  App__header__connect__wallet,
  App__header__logo,
} from '../../styles/app/header.style';
import { Container } from '../../styles/globals.style';

const LaunchApp = () => {
  return (
    <>
      <Background>
        <Container mxWidth="lg">
          <AppHeader>
            <App__header__logo>
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width="100px"
                    height="30px"
                  />
                </a>
              </Link>
            </App__header__logo>
            <App__header__connect__wallet>
              <Button
                label="Connect wallet"
                bgColor="var(--primary-bg)"
                borderRadius="35px"
                color="#fff"
              />
            </App__header__connect__wallet>
          </AppHeader>
          <Container mxWidth="sm">
            <Tabs />
          </Container>
        </Container>
      </Background>
    </>
  );
};

export default LaunchApp;
