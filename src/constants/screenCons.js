import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export function widthPercentage (p) {
    return (p * width) / 100;
}
export const heightPercentage = p => {
    return (p * height) / 100;
}