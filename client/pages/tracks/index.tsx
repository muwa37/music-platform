import { Box, Button, Card, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/action-creators/track';

const Tracks = () => {
  const router = useRouter();
  const dispatch = useDispatch() as NextThunkDispatch;

  const { tracks, error } = useTypedSelector(state => state.track);

  const [query, setQuery] = useState<string>('');
  const [timer, setTimer] = useState(null);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  const addHandler = () => {
    router.push('/tracks/create');
  };
  const onSearchChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 500)
    );
  };

  return (
    <MainLayout title={'track list - music platform'}>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>track list</h1>
              <Button onClick={addHandler}>add track</Button>
            </Grid>
          </Box>
          <TextField fullWidth value={query} onChange={onSearchChangeHandler} />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
  }
);
