// @ts-expect-error TS(2307): Cannot find module './Title.module.css' or its cor... Remove this comment to see the full error message
import css from './Title.module.css';

export const Title = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h1 className={css.title}>Learn to Cook <span className={css.part}>Tasty Treats'&nbsp;</span>Customizable Masterclass</h1>
  )
}