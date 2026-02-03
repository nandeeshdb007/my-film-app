import { ImageSourcePropType } from "react-native";

export interface MovieCardProps{
    image?: ImageSourcePropType | undefined
    title:string;
    genre:string
}