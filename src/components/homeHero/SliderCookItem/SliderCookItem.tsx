// @ts-expect-error TS(2307): Cannot find module './SliderCookItem.module.css' o... Remove this comment to see the full error message
import css from './SliderCookItem.module.css';

export const SliderCookItem = ({
  cook
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={css.wrapper}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <img className={css.cook} src={cook.imgUrl} loading="lazy" width="412" alt={cook.name}/>
    </div>
  )
}