import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import styles from '../styles/Player.module.scss';
import { Track } from '../types/track';
import ProgressBar from './ProgressBar';

const Player = () => {
  const active = false;
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

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction='column'>
        <h4 style={{ margin: 5 }}>{track.name}</h4>
        <h5 style={{ margin: 5 }}>{track.artist}</h5>
      </Grid>
      <ProgressBar current={0} end={100} onChange={e => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <ProgressBar current={0} end={100} onChange={e => {}} />
    </div>
  );
};

export default Player;
