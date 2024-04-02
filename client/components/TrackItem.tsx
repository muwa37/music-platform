import { Card } from '@material-ui/core';
import { FC } from 'react';
import { Track } from '../types/track';

interface TrackItemProps {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  return <Card>{track.name}</Card>;
};

export default TrackItem;
