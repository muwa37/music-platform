import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useInput } from '../../hooks/useIntput';
import MainLayout from '../../layouts/MainLayout';
import { Track } from '../../types/track';

const Track = ({ serverTrack }) => {
  const [track, setTrack] = useState<Track>(serverTrack);
  const router = useRouter();

  const username = useInput('');
  const comment = useInput('');

  const onBackClickHandler = () => {
    router.push('/tracks');
  };
  const onSendCommentHandler = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/tracks/comment',
        {
          username: username.value,
          text: comment.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout>
      <Button variant='outlined' onClick={onBackClickHandler}>
        go back
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img
          src={'http://localhost:5000/' + track.picture}
          width={200}
          height={200}
        />
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
        <TextField {...username} label='user name' fullWidth />
        <TextField {...comment} label='comment' fullWidth multiline rows={4} />
        <Button onClick={onSendCommentHandler}>send comment</Button>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id);
  return { props: { serverTrack: response.data } };
};
