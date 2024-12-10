import { useState, useEffect } from "react";
import styles from'@/styles/pagination.module.css';
import Link from "next/link";

interface Props {
  totalItems: number;
  itemCountPerPage: number;
  pageCount: number;
  currentPage: number;
}

export default function Pagination({ totalItems, itemCountPerPage, pageCount, currentPage }: Props) {
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <div className={styles.wrapper}>
        <div className={`${styles.move} ${noPrev && styles.invisible}`}>
          <Link href={`?page=${start - 1}`}>이전</Link>
        </div>
        <>
        {[...Array(pageCount)].map((a, i) => (
            start + i <= totalPages && (
              <li key={i} className={styles.li_margin}>
                <Link className={`${styles.page} ${currentPage === start + i && styles.active}`}
                  href={`?page=${start + i}`}>
                  {start + i}
                </Link>
              </li>
            )
          ))}
        </> 
        <div className={`${styles.move} ${noNext && styles.invisible}`}>
          <Link href={`?page=${start + pageCount}`}>다음</Link>
        </div>
    </div>
  );
}