import fetchWordpress from "lib/config/fetchWordpress";
import HomeArticleCards, { tHomeArticleCardsEndpoint, tHomeArticleCardsResponse } from "data/queries/HomeArticleCards";
import { LatestArticleCard, ReguralArticleCard } from "components/Utils/Cards";
import CategoryArticles, { tCategoryArticlesEndpoint, tCategoryArticlesResponse } from "data/queries/CategoryArticles";

export default async function HomePage(){
  const latestArticles = await fetch(`${process.env.WP_API}`, {
    ...fetchWordpress,
    body : JSON.stringify({
      query:HomeArticleCards
    })
  })
  .then(response => response.json())
  .then((response:tHomeArticleCardsEndpoint):tHomeArticleCardsResponse[] => {
    return response.data.posts.nodes.map((item) => {
      return {
        author :{ 
          name:item.author.node.name,
          uri:item.author.node.uri
        },
      categories: item.categories.nodes.map((item) => {
          return {
            name:item.name,
            uri:item.uri
          }
        }),
        image:item.featuredImage.node,
        release:item.date,
        title:item.title,
        uri:item.uri
      }
    })
  })

  const allArticles = await fetch(`${process.env.WP_API}`, {
    ...fetchWordpress,
    body: JSON.stringify({
      query:CategoryArticles({
        first:10,
        category:"",
        after:""
      })
    })
  })
  .then(response => response.json())
  .then((response:tCategoryArticlesEndpoint):tCategoryArticlesResponse => {
    const {pageInfo,posts} = response.data
    return {
      posts:posts.nodes.map((item) => {
        return {
          author: {
              name:item.author.node.name,
              uri:item.author.node.uri
          },
          categories: item.categories.nodes.map((item) => {
            return {
              name:item.name,
              uri:item.uri
            }
          }),
          excerpt:item.excerpt,
          image:item.featuredImage.node,
          release:item.date,
          title:item.title,
          uri:item.uri
        }
      }),
      // info: {
      //   cursor: {
      //     end:pageInfo.endCursor,
      //     start:pageInfo.startCursor
      //   },
      //   page: {
      //     next:pageInfo.hasNextPage,
      //     prev:pageInfo.hasPreviousPage
      //   }
      // }
    }
  })


  return (
    <div>
      <h1>home page</h1>
      <ul>
        
      </ul>
      <ul>
        {latestArticles.map((item,index) => {
          return <LatestArticleCard
            {...item}
            index={index}
            key={index}
            theme="big"
          />
        })}
      </ul>
      <main>
        {allArticles.posts.map((item,index) => {
          return <ReguralArticleCard
            {...item}
            key={index}
          />
        })}
      </main>
    </div>
  )
}