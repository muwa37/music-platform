import {
  Card,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import { FC } from 'react';

interface StepWrapperProps {
  activeStep: number;
}

const steps = ['track info', 'cover load', 'audio load'];

const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, ind) => (
          <Step key={ind} completed={activeStep > ind}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent='center'
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
