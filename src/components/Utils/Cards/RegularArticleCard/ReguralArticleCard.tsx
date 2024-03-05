import Image from "next/image";
import { tReguralArticleCard } from "components/Utils/Cards/RegularArticleCard/ReguralArticleCard.models";
import Link from "next/link";
import css from "components/Utils/Cards/RegularArticleCard/ReguralArticleCard.module.scss";
import getDate from "lib/functions/getDate";
import { HiArrowLongRight } from "react-icons/hi2";



export default function ReguralArticleCard({author,categories,excerpt,image,release,title,uri}:tReguralArticleCard){
    const {day,month,year} = getDate(release,"long")
    return (
        <li className={css.wrapper} >
            <picture className={css.image} >
                <Link href={uri}>
                    <Image
                        alt={image.altText}
                        fill
                        loading="lazy"
                        src={image.sourceUrl}
                        style={{
                            objectFit:"cover",
                            objectPosition:"center"
                        }}
                        title={image.title}
                        quality={35}
                    />
                </Link>
            </picture>
            <div className={css.box} >
                <ul className={css.categories} >
                    {categories.map(({name,uri},index) => {
                        return <li className={css.category}  key={index}><Link href={uri}>{name}</Link></li>
                    })}
                </ul>
                <div className={css.details} >
                      <p className={css.release}>
                        <Link href={uri}>
                            {`${day} ${month()} ${year}`}
                        </Link>
                    </p>
                    <i className={css.line} />
                    <span className={css.author} >
                        <Link href={author.uri} rel="index nofollow">
                            {author.name}
                        </Link>
                    </span>
                </div>
                <article className={css.container} >
                    <h3 className={css.title}  dangerouslySetInnerHTML={{__html:title}} />
                    <p className={css.excerpt}  dangerouslySetInnerHTML={{__html:excerpt}} />
                    <Link className={css.button}  href={uri}>
                        <span>Przeczytaj więcej</span>
                        <i><HiArrowLongRight /></i>
                    </Link>
                </article>
            </div>
        </li>
    )
}