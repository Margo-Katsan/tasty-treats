// @ts-expect-error TS(2307): Cannot find module './SliderTopicInfoItem.module.c... Remove this comment to see the full error message
import css from "./SliderTopicInfoItem.module.css";

export const SliderTopicInfoItem = ({
  topic,
  imgTopicName
}: any) => {
  const { topicInfo, topicImg, topicDesc, topicArea, blur, topicImgPizza } = css;
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={topicInfo}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <img className={`${topicImg} ${imgTopicName ? topicImgPizza : '' }`} src={topic.previewUrl} loading="lazy" alt={topic.name}/>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <p className={topicDesc}>{topic.name}</p>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <p className={topicArea}>{topic.area}</p>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={blur}></div>
    </div>
  )
}