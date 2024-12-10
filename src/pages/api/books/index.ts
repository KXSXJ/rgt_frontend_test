import { apiUrl, selectAllBooks } from "@/lib/db";
import axios from "axios";
import { NextApiRequest, NextApiResponse} from "next";
import Error from "next/error";



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


export default  async function handler (req: NextApiRequest, res: NextApiResponse)  {
    if (req.method === 'GET') {
        try {
          const books = await selectAllBooks(); 
          res.status(200).json(books);
        } catch (error) {
          console.error('책 목록을 가져오는 데 실패했습니다:', error);
          res.status(500).json({ error: '책 목록을 가져오는 데 실패했습니다.' });
        }
      }else if(req.method === 'POST'){
        
    }
}