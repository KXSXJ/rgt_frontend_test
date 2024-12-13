import { Book } from "@/pages/api/books";
import BookEdit from "../../../components/books/book-edit";
import dayjs from "dayjs";

export default function CreateBook(){
    const book ={
        id:0,
        title: '',
        sub_title: '',
        price: 0,
        author: '',
        image_url: '',
        publisher: '',
        published_date: dayjs(new Date).format('YYYY-MM-DD'),
        sales_quantity: 0,
    }


    return(
        <BookEdit book={book} mode="create"/>
    )
}