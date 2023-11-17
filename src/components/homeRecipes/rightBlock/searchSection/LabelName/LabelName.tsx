// @ts-expect-error TS(2307): Cannot find module './LabelName.module.css' or its... Remove this comment to see the full error message
import css from './LabelName.module.css';

export const LabelName = ({
  name
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span className={css.title}>{name}</span>
 )
}