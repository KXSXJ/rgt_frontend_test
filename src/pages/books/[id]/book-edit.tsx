import { Book } from '@/pages/api/books'

import Image from 'next/image'
import { yupResolver } from "@hookform/resolvers/yup";

import {useForm} from 'react-hook-form'
import { FieldError, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useSchema } from '@/utils/hooks/useSchema';
import { useState } from 'react';
type mode = 'edit' | 'create'

interface EditBook extends Omit<Book,'published_date'>{
    published_date: string;
}

interface EditMode {
    book:EditBook;
    mode: mode;
}


export default function BookEdit({book,mode}:EditMode) {
    const [preview, setPreview] = useState(book.image_url);
    const schema =useSchema();

  
    const {register, handleSubmit, formState: {errors}, setValue}
    = useForm({
           resolver: yupResolver(schema), 
           mode: 'onTouched',
           defaultValues: book,
       });
   
    //성공 시
    const onValid: SubmitHandler<EditBook> = (data: EditBook) => {
        console.log(data.image_url, data)
    };

    //실패 시
    const onInvalid: SubmitErrorHandler<EditBook> = (errors: FieldError): void => {
        if (errors) {
            window.alert('모든 내용을 채워주세요.')
        }
    }

  


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = () => {
            //Image Preview
            setPreview(reader.result as string);  
            setValue('image_url', reader.result as string);  // image_url 필드에 URL 설정
            };
            
            reader.readAsDataURL(file);  // 파일을 Data URL 형식으로 읽음
        }
      };

    return(
    <form onSubmit={handleSubmit(onValid,onInvalid)} encType="multipart/form-data">
        <h2>{mode==='edit' ? '책 수정하기':'책 추가하기'}</h2>
        <div>
            <label>제목</label>
            <input type="text" {...register('title')} />
            {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div>
            <label>부제목</label>
            <input type="text" {...register('sub_title')} />
            {errors.sub_title && <p>{errors.sub_title.message}</p>}
        </div>

        <div>
            <label>가격</label>
            <input type="number" {...register('price')} />
            {errors.price && <p>{errors.price.message}</p>}
        </div>

        <div>
            <label>저자</label>
            <input type="text" {...register('author')} />
            {errors.author && <p>{errors.author.message}</p>}
        </div>

        <div>
        <div>
        {preview && 
            <Image src={preview} alt="book_img" width={350} height={400} />
        }
        <div>
        <label htmlFor="img_url">이미지 URL 또는 파일 업로드</label>
            <input
                type="text"
                {...register('image_url')}
                placeholder="이미지 URL 입력"
            />
            {errors.image_url && <p>{errors.image_url.message}</p>}
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image_url"
          name="image_url"
          {...register('image_url')}
          onChange={handleFileChange}
        />
        {errors.image_url && <p>{errors.image_url.message}</p>}
      </div>
        </div>

        <div>
            <label>출판사</label>
            <input type="text" {...register('publisher')} />
            {errors.publisher && <p>{errors.publisher.message}</p>}
        </div>

        <div>
            <label>출판일</label>
            <input type="date" {...register('published_date')} />
            {errors.published_date && <p>{errors.published_date.message}</p>}
        </div>

        <div>
            <label>판매 수량</label>
            <input type="number" {...register('sales_quantity')} />
            {errors.sales_quantity && <p>{errors.sales_quantity.message}</p>}
        </div>
        <button onClick={()=>{window.history.back();}}>취소</button>
        <button type="submit">제출</button>
    </form>
    )
}