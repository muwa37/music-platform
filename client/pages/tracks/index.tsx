import { Box, Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/action-creators/track';

const Tracks = () => {
  const router = useRouter();

  const { tracks, error } = useTypedSelector(state => state.track);

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

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>track list</h1>
              <Button onClick={addHandler}>add track</Button>
            </Grid>
          </Box>
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
