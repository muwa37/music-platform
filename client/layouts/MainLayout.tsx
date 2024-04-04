import { Container } from '@material-ui/core';
import Head from 'next/head';
import { FC } from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'music platform'}</title>
        <meta
          name='description'
          content={
            'music platform where everyone can add tracks and comment them' +
            description
          }
        />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content={keywords || 'music, tracks, artist'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Container maxWidth={false} style={{ margin: '90px 0' }}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;
