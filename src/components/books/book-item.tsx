import { BookItemProps } from "@/pages/api/books";
import { formatDate } from "@/utils/dayjs-format";
import Image from "next/image";

import styles from '@/styles/books.module.css'
import Link from "next/link";

export default function BookItem({book}:BookItemProps){
    return(
        <Link href={`/books/${book.id}`}>
            <article className={styles.item_container}>
                <Image src={`${book.image_url}`} alt='book_img' width={100} height={100} loading="lazy"/>
                <div>
                    <h4>{book.title}</h4>
                    <p>{book.author} &#183; {formatDate(new Date(book.published_date))}</p>
                    <p>{book.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    <p>판매수량 : {book.sales_quantity}권</p>
                </div>
                
            </article>
        </Link>
    )
}