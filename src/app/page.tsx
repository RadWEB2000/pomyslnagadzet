import fetchWordpress from "lib/config/fetchWordpress";
import HomeArticleCards, { tHomeArticleCardsEndpoint, tHomeArticleCardsResponse } from "data/queries/HomeArticleCards";
import { BigPictureArticleCard, LatestArticleCard, ReguralArticleCard } from "components/Utils/Cards";
import CategoryArticles, { tCategoryArticlesEndpoint, tCategoryArticlesResponse } from "data/queries/CategoryArticles";
import css from "src/app/HomePage.module.scss";
import { PrimaryHeading } from "components/Utils/Headings";

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
      {/* HEAD */}
      <div className={css.head}>
        <div className={css.big__article}>
          <BigPictureArticleCard
            cards={latestArticles}
          />
        </div>
        <div>
          <PrimaryHeading heading={"p"} title="Najnowsze posty:" />
          <ul className={css.latest__articles}>
            {latestArticles.map((item,index) => {
            return <LatestArticleCard
              {...item}
              index={index}
              key={index}
              theme="big"
            />
          })}
          </ul>
        </div>
      </div>
      <div className={css.box}>
        <PrimaryHeading heading={1} title="Pomysł na gadżet" />
        <main className={css.main}>
        <ul className={css.articles}>
          {allArticles.posts.map((item,index) => {
          return <ReguralArticleCard
            {...item}
            key={index}
          />
        })}
        </ul>
      </main>
      <aside className={css.aside}>
        <PrimaryHeading heading={4} title="Najnowsze komentarze" />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quam a unde veritatis, veniam quaerat explicabo fugiat dignissimos vero rerum, culpa nisi reiciendis, vel aliquam repellat commodi nemo modi labore.
      </aside>
      </div>
      
    </div>
  )
}