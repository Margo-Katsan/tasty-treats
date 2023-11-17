// @ts-expect-error TS(2307): Cannot find module './SliderBigTopicItem.module.cs... Remove this comment to see the full error message
import css from './SliderBigTopicItem.module.css'
export const SliderBigTopicItem = ({
  topic
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={css.wrapper} style={{ backgroundImage: `url(${topic.previewUrl})` }}></div>
  )
}