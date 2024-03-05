import { tImage } from "ts/common";

export type tBigPictureArticleCard = {
  cards: {
    author: {
      name: string;
      uri: string;
    };
    categories: {
      name: string;
      uri: string;
    }[];
    image: tImage;
    release: string;
    title: string;
    uri: string;
  }[];
};
