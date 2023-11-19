import css from "./SliderTopicInfoItem.module.css";

export const SliderTopicInfoItem = ({
  topic,
  imgTopicName
}: any) => {
  const { topicInfo, topicImg, topicDesc, topicArea, blur, topicImgPizza } = css;
  return (
    <div className={topicInfo}>
      <img className={`${topicImg} ${imgTopicName ? topicImgPizza : '' }`} src={topic.previewUrl} loading="lazy" alt={topic.name}/>
      <p className={topicDesc}>{topic.name}</p>
      <p className={topicArea}>{topic.area}</p>
      <div className={blur}></div>
    </div>
  )
}