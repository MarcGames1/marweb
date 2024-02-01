import React from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import styles from './PortraitVideoPlayer.module.css';

export interface IPortraitVideoPlayerProps {
  className?: string;
  url: string;
  controls?: boolean;
}

const PortraitVideoPlayer = (props: IPortraitVideoPlayerProps) => {
  return (
    <div
      className={`${styles.player_wrapper} ${
        props.className ? `${props.className}` : ''
      }`}
    >
      <div className={styles.react_player}>
        <video className='object-cover' src={props.url} {...props} />
      </div>
    </div>
  );
};

export default PortraitVideoPlayer;
