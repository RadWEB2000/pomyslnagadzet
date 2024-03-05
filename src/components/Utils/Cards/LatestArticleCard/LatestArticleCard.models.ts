import { tImage } from "ts/common";

export type tLatestArticleCard = {
  author: {
    name: string;
    uri: string;
  };
  image: tImage;
  index: number;
  release: string;
  title: string;
  theme: "small" | "big";
  uri: string;
};
