import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

 export const hs = (size: number) => (width / guidelineBaseWidth) * size; 
 export const vs = (size: number) => (height / guidelineBaseHeight) * size; 
 export const ms = (size: number, factor = 0.5) => size + (hs(size) - size) * factor; 
