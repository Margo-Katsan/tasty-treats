import { useState } from "react";
import ReactPlayer from 'react-player';
import { FiYoutube } from 'react-icons/fi';
// @ts-expect-error TS(2307): Cannot find module './VideoPlayer.module.css' or i... Remove this comment to see the full error message
import css from './VideoPlayer.module.css';

export const VideoPlayer = ({
  video,
  preview
}: any) => {
  const [playing, setPlaying] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ReactPlayer
      url={video}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      playIcon={<FiYoutube style={{ position: "absolute" }} size={32} color="rgba(248, 248, 248, 1)" />}
      playing={playing}
      width='100%'
      height='295px'
      className={css.player}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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