import { FC } from 'react';

interface ProgressBarProps {
  current: number;
  end: number;
  onChange: (e) => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ current, end, onChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type='range'
        min={current}
        max={end}
        value={current}
        onChange={onChange}
      />
      <div>
        {current} / {end}
      </div>
    </div>
  );
};

export default ProgressBar;
