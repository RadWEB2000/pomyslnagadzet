import Article from "app/data/queries/Article";
import fetchWordpress from "lib/config/fetchWordpress";

type tArticle = {
    params: {
        slug:string;
    }
}

export default async function ArticlePage({params:{slug}}:tArticle ){
    const data = await fetch(`${process.env.WP_API}`, {
    ...fetchWordpress,
    body : JSON.stringify({
      query:Article(slug)
    })
  })
  .then(response => response.json())
  .then((response) => {
    return response
  })

  console.log(data.data.post.content)

    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html:data.data.post.title}} />
            <p
                dangerouslySetInnerHTML={{__html:data.data.post.content}}
            />
        </>
    )
}