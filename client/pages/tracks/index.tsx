import { Box, Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { Track } from '../../types/track';

const Tracks = () => {
  const router = useRouter();
  const tracks: Track[] = [
    {
      _id: '1',
      name: 'sample track 1',
      artist: 'sample artist 1',
      text: 'sample song text 1',
      listens: 4,
      audio: '',
      picture: '',
      comments: [],
    },
    {
      _id: '2',
      name: 'sample track 2',
      artist: 'sample artist 2',
      text: 'sample song text 2',
      listens: 4,
      audio: '',
      picture: '',
      comments: [],
    },
    {
      _id: '3',
      name: 'sample track 3',
      artist: 'sample artist 3',
      text: 'sample song text 3',
      listens: 4,
      audio: '',
      picture: '',
      comments: [],
    },
  ];

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
