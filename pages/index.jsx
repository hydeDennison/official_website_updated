import Head from 'next/head';
import Button from '../components/Button';
import { Typography } from '../styles/globals.style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Launch App | 3swappdex</title>
      </Head>
      <Typography
        as="h1"
        fontSize="20px"
        textAlign="center"
        fontWeight="100"
        letterSpacing="2px"
        color="green"
      >
        <Button label="Hello" />
      </Typography>
    </>
  );
}
