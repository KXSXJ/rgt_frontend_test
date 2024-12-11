import { MainHeader } from "@/components/main-header"
import { AppContext, AppInitialProps, AppProps } from "next/app"

import { dehydrate, DehydratedState, Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { GetServerSideProps, NextComponentType } from "next"
import { getTotalCount } from "@/lib/db";
import { getBooks } from "../api/books";
import { QUERY_BOOKS_KEY, useFetchBooks } from "@/utils/react-query";
import BookList from "@/components/books";
import Pagination from "@/components/pagination";
import Link from "next/link";



export const getServerSideProps : GetServerSideProps = async ({query}) => {
    const queryClient = new QueryClient();
    const page = query.page || 1;
    
    await queryClient.prefetchQuery([QUERY_BOOKS_KEY, page], () => getBooks(Number(page)));
    const totalCount = await getTotalCount();
  
    return {
          props: {
            dehydratedState: dehydrate(queryClient),
            page: Number(page),
            total: totalCount,
          }
      };
    };

interface HomePageProps{
    dehydratedState: DehydratedState,
    page: number,
    total:number,
  }


const BookStore = ({dehydratedState, page, total}:HomePageProps) => {
    const {data} = useFetchBooks(page)

    return (
        <Hydrate state={dehydratedState}>
            <Link href={'/create'}>
                <button>추가하기</button>
            </Link>

            {data &&
              <>
                <BookList books={data}/>
                <Pagination 
                  totalItems={total}
                  itemCountPerPage={10} 
                  pageCount={5} 
                  currentPage={1}
                />
              </>
            }  
        </Hydrate>
    );
  };

  export default BookStore;
