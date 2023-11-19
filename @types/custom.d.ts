declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.module.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module '@uidotdev/usehooks' {
  interface WindowSize {
    width: number;
    height: number;
  }

  export function useWindowSize(): WindowSize;
}