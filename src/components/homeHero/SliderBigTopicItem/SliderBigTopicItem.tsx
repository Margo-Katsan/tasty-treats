import css from './SliderBigTopicItem.module.css'
export const SliderBigTopicItem = ({
  topic
}: any) => {
  return (
    <div className={css.wrapper} style={{ backgroundImage: `url(${topic.previewUrl})` }}></div>
  )
}