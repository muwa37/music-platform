import { Container } from '@material-ui/core';
import { FC } from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth={false} style={{ margin: '90px 0' }}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;
