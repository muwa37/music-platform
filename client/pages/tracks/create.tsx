import { Button, Grid, TextField } from '@material-ui/core';
import { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);

  const onPrevStepClickHandler = () => {
    setActiveStep(prev => prev - 1);
  };
  const onNextStepClickHandler = () => {
    setActiveStep(prev => prev + 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction='column' style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label='track name' />
            <TextField style={{ marginTop: 10 }} label='artist' />
            <TextField
              style={{ marginTop: 10 }}
              label='song text'
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setCover} accept='image/*'>
            <Button>load cover</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button>load audio</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={onPrevStepClickHandler}>
          previous step
        </Button>
        <Button disabled={activeStep === 2} onClick={onNextStepClickHandler}>
          next step
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
