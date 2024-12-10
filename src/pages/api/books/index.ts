import { apiUrl, selectBooks } from "@/lib/db";
import axios from "axios";
import { NextApiRequest, NextApiResponse} from "next";



export interface Book{
    id : number,
    title :string,
    sub_title:string,
    price : number,
    author :string,
    image_url :string,
    publisher : string,
    published_date:Date,
    sales_quantity:number,
}

export interface BookListProps {
    books: Book[];
  }
export interface BookItemProps{
    book:Book;
}


export default  async function handler (req: NextApiRequest, res: NextApiResponse)  {
    if (req.method === 'GET') {
    
        try {
          const page = req.query.page|| 1;
          const books = await selectBooks(Number(page)); 
          res.status(200).json(books);
        } catch (error) {
          console.error('책 목록을 가져오는 데 실패했습니다:', error);
          res.status(500).json({ error: '책 목록을 가져오는 데 실패했습니다.' });
        }
      }else if(req.method === 'POST'){
        
    }
}


export const getBooks = async(page:number):Promise<Book[]>=>{
  return axios.get(`${apiUrl}/api/books?page=${page}`)
  .then(res=>res.data)
  .catch(err=>{
    console.error(err);
    throw new Error('목록을 가져오는데 실패했습니다.');
  })
}

