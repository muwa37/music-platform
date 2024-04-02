import { Container } from '@material-ui/core';
import { FC } from 'react';
import Navbar from '../components/Navbar';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
    </>
  );
};

export default MainLayout;
