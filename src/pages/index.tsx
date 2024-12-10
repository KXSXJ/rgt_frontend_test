import { apiUrl } from "@/lib/db";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Book } from "./api/books";

interface HomePageProps {
    books: Book[];
  }

export const getServerSideProps: GetServerSideProps = async () => {
    try {
      const books = await axios.get(`${apiUrl}/api/books`).then((res)=>res.data);
    
      return {
        props: { books },
      };
    } catch (error) {
      return {
        props: { books: [] },
      };
    }
  };
  
const HomePage = ({ books }: HomePageProps) => {
    console.log(books)
    return(
            <>

            </>
    )
}

export default HomePage;