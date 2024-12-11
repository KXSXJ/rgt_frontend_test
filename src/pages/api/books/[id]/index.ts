import { apiUrl, deleteBook as deleteBookQuery, selectBookDetail, updateBook as updateBookQuery} from "@/lib/db";
import axios from "axios";
import { NextApiRequest, NextApiResponse} from "next";
import { Book } from "..";


export default  async function handler (req: NextApiRequest, res: NextApiResponse)  {
    if (req.method === 'GET') {
    
        try {
          const id = req.query.id|| 1;
          const book = await selectBookDetail(Number(id)); 
          res.status(200).json(book);
        } catch (error) {
          console.error('책 정보를 가져오는 데 실패했습니다:', error);
          res.status(500).json({ error: '책 정보를 가져오는 데 실패했습니다.' });
        }
      }else if(req.method === 'PUT'){
        try{
            const id = req.query.id|| 1;
            const {title, sub_title, price, author, image_url, publisher, published_date, sales_quantity} = req.body;
            const data ={
                title,
                sub_title,
                price,
                author,
                image_url,
                publisher,
                published_date:published_date,
                sales_quantity,
            }
            updateBookQuery(Number(id), data);
            res.status(200)
        }catch(error){
            console.error('책 정보를 업데이트에 실패했습니다. :', error);
            res.status(500).json({ error: '책 정보를 업데이트에 실패했습니다.' });
        }
    }else if(req.method === 'DELETE'){
        try{
            const id = req.query.id|| 1;
            deleteBookQuery(Number(id));
        }catch(error){
            console.error('책 삭제에 패했습니다. :', error);
            res.status(500).json({ error: '책 삭제에 패했습니다.' });
        }
    }
}

export const getBookDetail = (id:number)=>{
    return axios.get(`${apiUrl}/api/books/${id}`)
    .then(res=>res.data)
    .catch(err=>{
      console.error(err);
      throw new Error('책 정보를 가져오는데 실패했습니다.');
    })
}


export const updateBookDetail = (id:number, data:Omit<Book,'id'>)=>{
    return axios.put(`${apiUrl}/api/books/${id}`,data)
    .then(res=>{
        window.confirm('수정이 완료되었습니다.')
        res.data
    })
    .catch(err=>{
      console.error(err);
      throw new Error('책 정보 업데이트에 실패했습니다.');
    })
}
export const deleteBookDetail = (id:number)=>{
    return axios.delete(`${apiUrl}/api/books/${id}`)
    .then(res=>res.data)
    .catch(err=>{
      console.error(err);
      throw new Error('책을 삭제하는데 실패했습니다.');
    })
}