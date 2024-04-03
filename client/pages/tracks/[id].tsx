import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import MainLayout from '../../layouts/MainLayout';
import { Track } from '../../types/track';

const Track = () => {
  const track: Track = {
    _id: '2',
    name: 'sample track 2',
    artist: 'sample artist 2',
    text: 'sample song text 2',
    listens: 4,
    audio: '',
    picture: '',
    comments: [],
  };
  const router = useRouter();
  const onBackClickHandler = () => {
    router.push('/tracks');
  };

  return (
    <MainLayout>
      <Button variant='outlined' onClick={onBackClickHandler}>
        go back
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ margin: 30 }}>
          <h1>{track.name}</h1>
          <h3>artist: {track.artist}</h3>
          <h4>listens: {track.listens}</h4>
        </div>
      </Grid>
      <h2>lyrics:</h2>
      <p>{track.text}</p>
      <h2>comments: </h2>
      <Grid container>
        <TextField label='user name' fullWidth />
        <TextField label='comment' fullWidth multiline rows={4} />
        <Button>send comment</Button>
      </Grid>
      <div>
        {track.comments.map(comment => {
          <div>
            <h5>author: {comment.username}</h5>
            <h5>comment: {comment.text}</h5>
          </div>;
        })}
      </div>
    </MainLayout>
  );
};

export default Track;
