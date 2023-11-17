// @ts-expect-error TS(2307): Cannot find module './Tags.module.css' or its corr... Remove this comment to see the full error message
import css from './Tags.module.css';

export const Tags = ({
  tags
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ul className={css.list}>
      {tags.map((tag: any, index: any) => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return tag !== '' && (<li className={css.item} key={index}>#{tag}</li>)
      })}
    </ul>
  );
}