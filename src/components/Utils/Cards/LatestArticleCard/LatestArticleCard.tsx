import Image from "next/image";
import { tLatestArticleCard } from "components/Utils/Cards/LatestArticleCard/LatestArticleCard.models";
import getDate from "lib/functions/getDate";
import Link from "next/link";
import css from "components/Utils/Cards/LatestArticleCard/LatestArticleCard.module.scss";

export default function LatestArticleCard({author,image,index,release,title,theme,uri}:tLatestArticleCard){
    const {day,month,year} = getDate(release,"long")
    return (
        <li className={css.wrapper} data-theme={theme}>
            <picture className={css.image} >
                <Image
                    alt={image.altText}
                    blurDataURL="data:image/webp;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
                    decoding="async"
                    fill
                    loading="lazy"
                        placeholder="blur"
                    src={image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={image.title}
                    quality={35}
                />
                <span className={css.index} >{index + 1}</span>
            </picture>
            <div className={css.box} >
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
                <header className={css.title__box} >
                    <h3 className={css.title} >
                        <Link href={uri}>
                            {title}
                        </Link>
                    </h3>
                </header>
            </div>
        </li>
    )
}