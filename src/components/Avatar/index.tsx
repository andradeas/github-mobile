import { View } from "react-native";
import { ImageProfile } from "./styles";

type Props = {
  urlImage: string;
  large: boolean;
}

export function Avatar({urlImage, large}: Props) {
  return (
    <View>
      <ImageProfile source={{uri: urlImage}} imageWidth={large} imageHeight={large} imageBorderRarius={large}/>
    </View>
  );
}