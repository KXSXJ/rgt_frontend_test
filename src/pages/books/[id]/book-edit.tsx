import { Book, createBook } from '@/pages/api/books'

import Image from 'next/image'
import { yupResolver } from "@hookform/resolvers/yup";

import {useForm} from 'react-hook-form'
import { FieldError, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useSchema } from '@/utils/hooks/useSchema';
import {  useReducer, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '@/lib/db';
import styles from '@/styles/form.module.css'
import { updateBookDetail } from '@/pages/api/books/[id]';
import { useConfirm } from '@/utils/hooks/useConfrim';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';


type mode = 'edit' | 'create'

interface EditBook extends Omit<Book,'published_date'>{
    published_date: string;
}

interface EditMode {
    book:EditBook;
    mode: mode;
}
async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await axios.post(`${apiUrl}/api/cloudinary/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.secure_url;
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      throw new Error('Image upload failed');
    }
  }

export default function BookEdit({book,mode}:EditMode) {
    const [preview, setPreview] = useState<string>(book.image_url);
    const router = useRouter();
    
    const schema =useSchema();
  
    const {register, handleSubmit, formState: {errors}, setValue}
    = useForm({
           resolver: yupResolver(schema), 
           mode: 'onTouched',
           defaultValues: book,
       });



    
    const onValid: SubmitHandler<EditBook> = async (data: EditBook) => {
      
        // 여기에 서버로 postData를 보내는 로직 추가

        if(mode==='edit'){
            useConfirm('정말로 수정하시겠습니까?', ()=>{updateBookDetail(book.id, data).then(()=>{ window.alert('수정이 완료되었습니다.')})})
        }else if( mode==='create'){
            useConfirm('정말로 생성하시겠습니까?', ()=>{createBook(data).then(()=>{ window.alert('생성이 완료되었습니다.')})})
        }
        router.push('/books')
    };

    //실패 시
    const onInvalid: SubmitErrorHandler<EditBook> = (errors: FieldError): void => {
        if (errors) {
            window.alert('모든 내용을 채워주세요.')
        }
    }


    const handleFileChange =async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
            let img_url = await uploadImage(file);
            setValue('image_url', img_url);
            setPreview(img_url)
            
        }
      };

    return(
        <form onSubmit={handleSubmit(onValid, onInvalid)} encType="multipart/form-data" className={styles.formWrapper}>
            <h2 className={styles.formTitle}>{mode === 'edit' ? '책 수정하기' : '책 추가하기'}</h2>
    
            <div className={styles.formGroup}>
                <label>제목</label>
                <input type="text" {...register('title', { required: '제목은 필수 항목입니다.' })} />
                {errors.title && <p className={styles.formError}>{errors.title.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                <label>부제목</label>
                <input type="text" {...register('sub_title', { required: '부제목은 필수 항목입니다.' })} />
                {errors.sub_title && <p className={styles.formError}>{errors.sub_title.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                <label>가격</label>
                <input type="number" {...register('price', { required: '가격을 입력하세요.' })} />
                {errors.price && <p className={styles.formError}>{errors.price.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                <label>저자</label>
                <input type="text" {...register('author', { required: '저자를 입력하세요.' })} />
                {errors.author && <p className={styles.formError}>{errors.author.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                {preview && (
                    <Image src={preview} alt="book_img" width={350} height={400} className={styles.previewImage} />
                )}
                <label htmlFor="image_url">이미지 URL 또는 파일 업로드</label>
                <input
                    type="text"
                    {...register('image_url')}
                    placeholder="이미지 URL 입력"
                />
                {errors.image_url && <p className={styles.formError}>{errors.image_url.message}</p>}
        
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    id="image_url"
                    name="image_url"
                    {...register('image_url')}
                    onChange={handleFileChange}
                />
                {errors.image_url && <p className={styles.formError}>{errors.image_url.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                <label>출판사</label>
                <input type="text" {...register('publisher', { required: '출판사를 입력하세요.' })} />
                {errors.publisher && <p className={styles.formError}>{errors.publisher.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                <label>출판일</label>
                <input type="date" {...register('published_date', { required: '출판일을 입력하세요.' })} />
                {errors.published_date && <p className={styles.formError}>{errors.published_date.message}</p>}
            </div>
    
            <div className={styles.formGroup}>
                <label>판매 수량</label>
                <input type="number" {...register('sales_quantity', { required: '판매 수량을 입력하세요.' })} />
                {errors.sales_quantity && <p className={styles.formError}>{errors.sales_quantity.message}</p>}
            </div>
    
            <div className={styles.formButtons}>
                <button type="button" className={styles.cancelBtn} onClick={() => { window.history.back(); }}>
                    취소
                </button>
                <button type="submit" className={styles.submitBtn}>
                    {mode ==='edit' ? '수정' : '생성'}
                </button>
            </div>
      </form>
    )
}