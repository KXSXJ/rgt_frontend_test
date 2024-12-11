import { Book, getBooks } from "@/pages/api/books"
import { getBookDetail } from "@/pages/api/books/[id]"
import { QueryResult } from "mysql2"
import { useQuery, UseQueryResult } from "react-query"

export const QUERY_BOOKS_KEY = 'QUERY_BOOKS_KEY'
export const QUERY_BOOK_DETAIL_KEY = 'QUERY_BOOK_DETAIL_KEY'
export const useFetchBooks = (page:number):UseQueryResult<Book[], unknown>=>(
    useQuery({
        queryKey:[QUERY_BOOKS_KEY,{page}],
        queryFn: ()=> getBooks(page),
        keepPreviousData: true,
    })
)
export const useFetchBookDetail = (id:number):UseQueryResult<Book, unknown>=>(
    useQuery({
        queryKey:[QUERY_BOOK_DETAIL_KEY,{id}],
        queryFn: ()=> getBookDetail(id),
    })
)