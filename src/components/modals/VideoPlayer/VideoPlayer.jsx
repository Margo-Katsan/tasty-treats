import { useState } from "react";
import ReactPlayer from 'react-player';
import { FiYoutube } from 'react-icons/fi';
import css from './VideoPlayer.module.css';

export const VideoPlayer = ({ video, preview}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <ReactPlayer
      url={video}
      playIcon={<FiYoutube style={{ position: "absolute" }} size={32} color="rgba(248, 248, 248, 1)" />}
      playing={playing}
      width='100%'
      height='295px'
      className={css.player}
      light={<div style={{
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(0deg, rgba(5, 5, 5, 0.40) 0%, rgba(5, 5, 5, 0.40) 100%), url(${preview})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'lightgray',
        backgroundPosition: '50%'}}/>}
      controls={true}
      onClickPreview={() => setPlaying(true)}
    />
  )
}