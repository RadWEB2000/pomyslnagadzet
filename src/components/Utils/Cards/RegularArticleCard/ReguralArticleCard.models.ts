import { tImage } from "ts/common";

export type tReguralArticleCard = {
  author: {
    name: string;
    uri: string;
  };
  categories: {
    name: string;
    uri: string;
  }[];
  excerpt: string;
  image: tImage;
  release: string;
  title: string;
  uri: string;
};
