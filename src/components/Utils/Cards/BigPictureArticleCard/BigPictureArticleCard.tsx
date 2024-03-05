"use client"
import Image from "next/image";
import Link from "next/link";
import {tBigPictureArticleCard} from "components/Utils/Cards/BigPictureArticleCard/BigPictureArticleCard.models"
import css from "components/Utils/Cards/BigPictureArticleCard/BigPictureArticleCard.module.scss"
import getDate from "lib/functions/getDate";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

export default function BigPictureArticleCard({cards}:tBigPictureArticleCard){
    const {day,month,year} = getDate(cards[0].release,"long")
    return (
        <ul className={css.wrapper}>
            <div className={css.buttons}>
                <button  className={css.button}><HiOutlineChevronLeft/></button>
                <button  className={css.button}><HiOutlineChevronRight/></button>
            </div>
            <li className={css.box}>
                <picture className={css.image}>
                <Image
                    alt={cards[0].image.altText}
                    blurDataURL="data:image/webp;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
                    decoding="async"
                    fill
                    loading="eager"
                    priority
                    placeholder="blur"
                    src={cards[0].image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={cards[0].image.title}
                    quality={35}
                />
                </picture>
                <Link className={css.container} href={cards[0].uri}>
                    <ul className={css.categories} >
                        {cards[0].categories.map(({name,uri},index) => {
                            return <li className={css.category}  key={index}><Link href={uri}>{name}</Link></li>
                        })}
                    </ul>
                    <div className={css.details} >
                        <p className={css.release}>
                            <Link href={cards[0].uri}>
                                {`${day} ${month()} ${year}`}
                            </Link>
                        </p>
                        <i className={css.line} />
                        <span className={css.author} >
                            <Link href={cards[0].author.uri} rel="index nofollow">
                                {cards[0].author.name}
                            </Link>
                        </span>
                    </div>
                    <h3 className={css.title} >
                            <Link href={cards[0].uri}>
                                {cards[0].title}
                            </Link>
                        </h3>
                </Link>
            </li>
        </ul>
    )
}