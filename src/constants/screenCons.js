import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export function widthPercentage(p) {
    return (p * width) / 100;
}
export const heightPercentage = p => {
    return (p * height) / 100;
}

export const getCoulumnCount = () => {
    if (width >= 1024) {
        return 4;
    } else if (width >= 768) {
        return 3;
    } else {
        return 2;
    }
}

export const getImageSize = (imageWidth, imageHeight) => {
    if (imageWidth > imageHeight) {
        return 250;
    } else if (imageHeight > imageWidth) {
        return 300;
    } else {
        return 200;
    }
}   