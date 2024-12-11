import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import axios from 'axios';
import { apiUrl } from '@/lib/db';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const form = formidable();
        form.parse(req, async (err, fields, files) => {
            if (err) {
              console.error('파일 파싱 에러:', err);
              res.status(500).json({ error: '파일 파싱 실패' });
              return;
            }          
            const file = Array.isArray(files.file) ? files.file[0] : files.file;
          
            if (!file) {
              console.error('파일이 없음');
              res.status(400).json({ error: '파일이 없습니다.' });
              return;
            }
          
            console.log('File path:', file.filepath); // 파일 경로 확인
          
            try {
              const result = await cloudinary.uploader.upload(file.filepath, {
                folder: 'rgt_frontend_test_images',
              });
              res.status(200).json({ secure_url: result.secure_url });
            } catch (error) {
              console.error('Cloudinary 업로드 에러:', error);
              res.status(500).json({ error: '이미지 업로드 실패' });
            }
        });
      } else {
        res.status(405).json({ error: 'Method Not Allowed' });
      }
}