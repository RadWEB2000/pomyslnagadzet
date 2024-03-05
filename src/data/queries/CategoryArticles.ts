import { tImage } from "ts/common";

export type tCategoryArticlesEndpoint = {
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
        excerpt: string;
        featuredImage: {
          node: tImage;
        };
        title: string;
        uri: string;
      }[];
    };
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
    };
  };
};

export type tCategoryArticlesResponse = {
  posts: {
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
  }[];
  info?: {
    cursor: {
      end: string;
      start: string;
    };
    page: {
      next: boolean;
      prev: boolean;
    };
  };
};

type tCategoryArticles = {
  after?: string;
  category?: string;
  first: number;
};

const CategoryArticles = ({
  after,
  category,
  first,
}: tCategoryArticles): string => {
  return `
        query CategoryArticles {
        posts(
            ${category ? `where: { categoryName: { eq: "${category}" } }` : ""}
            first: ${first}
            ${after ? `after: "${after}"` : ""}
        ) {
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
                excerpt(format: RENDERED)
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
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
            }
        }
        }
    `;
};

export default CategoryArticles;
