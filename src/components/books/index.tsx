import { BookListProps, Book} from "@/pages/api/books"
import styles from "@/styles/books.module.css";
import BookItem from "./book-item";

export default function BookList({books}:BookListProps){
    return(
        <section className={styles.books_container}>
            <div className={styles.books_grid}>
                {books.map((book:Book) => (
                            <BookItem book={book} key={book.id}/>
                        ))}
            </div>
        </section>
       
    )
}