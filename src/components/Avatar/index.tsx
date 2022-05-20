import { ImageProfile } from "./styles";

type Props = {
  urlImage: string;
  large: boolean;
}

export function Avatar({urlImage, large}: Props) {
  return (
    <ImageProfile source={{uri: urlImage}} imageWidth={large} imageHeight={large} imageBorderRarius={large}/>
  );
}