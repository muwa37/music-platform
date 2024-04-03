import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useActions } from '../hooks/useActions';
import styles from '../styles/TrackItem.module.scss';
import { Track } from '../types/track';

interface TrackItemProps {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();
  const onCardClickHandler = () => {
    router.push('/tracks/' + track._id);
  };

  const onTogglePlaybackHandler = e => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  return (
    <Card className={styles.track} onClick={onCardClickHandler}>
      <IconButton onClick={onTogglePlaybackHandler}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid container direction='column' className={styles.info}>
        <h4>{track.name}</h4>
        <h5>{track.artist}</h5>
      </Grid>
      {active && <div>02:24 / 03:56</div>}
      <IconButton
        className={styles.deleteBtn}
        onClick={e => e.stopPropagation()}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
