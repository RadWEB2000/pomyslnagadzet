import Image from "next/image";
import Link from "next/link";
import {tBigPictureArticleCard} from "components/Utils/Cards/BigPictureArticleCard/BigPictureArticleCard.models"
import css from "components/Utils/Cards/BigPictureArticleCard/BigPictureArticleCard.module.scss"
import getDate from "lib/functions/getDate";

export default function BigPictureArticleCard({author,categories,image,release,title,uri}:tBigPictureArticleCard){
    const {day,month,year} = getDate(release,"long")
    return (
        <li>
            <picture>
            <Image
                alt={image.altText}
                blurDataURL="data:image/webp;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
                decoding="async"
                fill
                loading="eager"
                priority
                placeholder="blur"
                src={image.sourceUrl}
                style={{
                    objectFit:"cover",
                    objectPosition:"center"
                }}
                title={image.title}
                quality={35}
            />
            </picture>
            <Link href={uri}>
                <section>
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
                <h3 className={css.title} >
                        <Link href={uri}>
                            {title}
                        </Link>
                    </h3>
                </section>
            </Link>
        </li>
    )
}