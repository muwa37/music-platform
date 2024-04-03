import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import { ChangeEvent, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss';
import ProgressBar from './ProgressBar';

let audio;

const Player = () => {
  const { pause, volume, active, duration, currentTime } = useTypedSelector(
    state => state.player
  );

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      playTrack();
      audio.play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setTrackDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setTrackCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const {
    pauseTrack,
    playTrack,
    setTrackVolume,
    setTrackCurrentTime,
    setTrackDuration,
    setActiveTrack,
  } = useActions();

  const onTogglePlaybackHandler = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const onVolumeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setTrackVolume(Number(e.target.value));
  };
  const onCurrentTimeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setTrackCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={onTogglePlaybackHandler}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid container direction='column'>
        <h4 style={{ margin: 5 }}>{active?.name}</h4>
        <h5 style={{ margin: 5 }}>{active?.artist}</h5>
      </Grid>
      <ProgressBar
        current={currentTime}
        end={duration}
        onChange={onCurrentTimeChangeHandler}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <ProgressBar
        current={volume}
        end={100}
        onChange={onVolumeChangeHandler}
      />
    </div>
  );
};

export default Player;
