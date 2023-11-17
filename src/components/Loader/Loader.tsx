import { ThreeDots } from 'react-loader-spinner';
// @ts-expect-error TS(2307): Cannot find module './Loader.module.css' or its co... Remove this comment to see the full error message
import css from "./Loader.module.css"

export const Loader = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ThreeDots 
height="80" 
width="80" 
radius="9"
color="var(--accent-color)" 
ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '5',
 


      }}
// @ts-expect-error TS(2322): Type '{ height: string; width: string; radius: str... Remove this comment to see the full error message
wrapperClassName={css.wrapper}
visible={true}
 />
  )
}