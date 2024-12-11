import { getBooks } from "@/pages/api/books"
import { QueryResult } from "mysql2"
import { useQuery } from "react-query"

export const QUERY_BOOKS_KEY = 'QUERY_BOOKS_KEY'
export const useFetchBooks = (page:number)=>(
    useQuery({
        queryKey:[QUERY_BOOKS_KEY,{page}],
        queryFn: ()=> getBooks(page),
        keepPreviousData: true,
    })
)