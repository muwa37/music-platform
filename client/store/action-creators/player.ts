import { PlayerAction, PlayerActionTypes } from '../../types/player';
import { Track } from '../../types/track';

export const playTrack = (): PlayerAction => {
  return { type: PlayerActionTypes.PLAY };
};

export const pauseTrack = (): PlayerAction => {
  return { type: PlayerActionTypes.PAUSE };
};

export const setTrackDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_DURATION, payload };
};

export const setTrackVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_VOLUME, payload };
};

export const setTrackCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

export const setActiveTrack = (payload: Track): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload };
};
