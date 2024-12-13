import { useFetchBookDetail } from "@/utils/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import dayjs from "dayjs";

import { formatDate } from "@/utils/dayjs-format";
import Link from "next/link";
import BookEdit from "../../../components/books/book-edit";

import styles from "@/styles/book-detail.module.css";
import { useConfirm } from "@/utils/hooks/useConfrim";
import { deleteBookDetail } from "@/pages/api/books/[id]";

export default function BookDetailPage(){
    const router = useRouter();
    const {id, mode} = router.query;
    const bookId = Number(id);

    if(isNaN(bookId)){
        return <div>Loading..</div>
    }

    const {data} = useFetchBookDetail(bookId);

    return(
        <>
            {data &&
                <section className={styles.book_container}>
                    {data &&
                    (mode === 'edit' ?
                        <BookEdit book={{...data,published_date:dayjs(data.published_date).format('YYYY-MM-DD')}} mode={mode}/>:
                        <>
                            <div className={styles.left_content}>
                                <h1>{data.title}</h1>
                                <h4>{data.sub_title}</h4>
                                <Image src={data.image_url} alt="book_img" width={350} height={400} />
                            </div>
                            <div className={styles.right_content}>
                            <span>
                                <h3>상세 정보</h3>
                                <div>
                                    <Link href={`/books/${id}?mode=edit`}>
                                        <button>수정하기</button>
                                    </Link>
                                    
                                    <button className={styles.deleteBtn} onClick={()=>{
                                        useConfirm('정말로 삭제하시겠습니까?', ()=>{deleteBookDetail(bookId)});
                                        window.alert('삭제가 완료되었습니다.')
                                        router.push('/books');
                                    }}>삭제하기</button>
                                
                                </div>
                            </span>
                            <p>출판사: {data.publisher}</p>
                            <p>출판일: {formatDate(new Date(data.published_date))}</p>
                            <p>판매수량: {data.sales_quantity}권</p>
                            <p>
                                가격: {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            </p>
                        </div>
                      </>
                    )
                  }
                    
                </section>
            }
        </>
    )
}