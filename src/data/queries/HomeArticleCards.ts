import { tImage } from "ts/common";

export type tHomeArticleCardsEndpoint = {
  data: {
    posts: {
      nodes: {
        author: {
          node: {
            name: string;
            uri: string;
          };
        };
        categories: {
          nodes: {
            name: string;
            uri: string;
          }[];
        };
        date: string;
        featuredImage: {
          node: tImage;
        };
        title: string;
        uri: string;
      }[];
    };
  };
};

export type tHomeArticleCardsResponse = {
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
};

const HomeArticleCards = `
    query HomeArticleCards {
        posts(first: 5) {
            nodes {
                author {
                    node {
                        name
                        uri
                    }
                }
                categories {
                    nodes {
                        name
                        uri
                    }
                }
                date
                featuredImage {
                    node {
                        altText
                        sourceUrl(size: POST_THUMBNAIL)
                        title(format: RENDERED)
                    }
                }
                title(format: RENDERED)
                uri
            }
        }
    }
`;

export default HomeArticleCards;
