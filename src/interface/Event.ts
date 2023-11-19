interface ICook {
  imgUrl: string
  imgWebpUrl: string
  name: string
}

interface ITopic {
  area: string
  imgUrl: string
  imgWebpUrl: string
  name: string
  previewUrl: string
  previewWebpUrl: string
}

export interface IEvent {
  cook: ICook;
  topic: ITopic;
  _id: string

}