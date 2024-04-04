import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import { useInput } from '../../hooks/useIntput';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);

  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const onPrevStepClickHandler = () => {
    setActiveStep(prev => prev - 1);
  };
  const onNextStepClickHandler = () => {
    setActiveStep(prev => prev + 1);
    if (activeStep === 2) {
      const formData = new FormData();

      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', cover);
      formData.append('audio', audio);

      axios
        .post('http://localhost:5000/tracks', formData)
        .then(res => router.push('tracks'))
        .catch(e => console.log(e));
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction='column' style={{ padding: 20 }}>
            <TextField {...name} style={{ marginTop: 10 }} label='track name' />
            <TextField {...artist} style={{ marginTop: 10 }} label='artist' />
            <TextField
              {...text}
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
