import { GetServerSideProps } from "next";
import Link from "next/link";
import { QueryClient, dehydrate } from "react-query";

import { getTotalCount } from "@/lib/db";
import { QUERY_BOOKS_KEY, useFetchBooks } from "@/utils/react-query";

import { getBooks } from "./api/books";

import Pagination from "@/components/pagination";
import BookList from "@/components/books";



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
  
const HomePage = ({ page, total }) => {
    const {data} = useFetchBooks(page)

    return( 
          <section>
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
               
          </section>
    )
}

export default HomePage;