const Article = (slug: string) => {
  return `
        query Article {
  post(id: "${slug}", idType: SLUG) {
    author {
      node {
        avatar {
          url
        }
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
    content(format: RENDERED)
    date
    excerpt(format: RENDERED)
    featuredImage {
      node {
        altText
        sourceUrl(size: COLOR_BLOG_FULL_WIDTH)
        title(format: RENDERED)
      }
    }
    template {
      templateName
    }
    title(format: RENDERED)
    uri
  }
}
    `;
};

export default Article;
