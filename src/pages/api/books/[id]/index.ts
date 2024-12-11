import { apiUrl, selectBookDetail } from "@/lib/db";
import axios from "axios";
import { NextApiRequest, NextApiResponse} from "next";


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
      }else if(req.method === 'POST'){
        
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