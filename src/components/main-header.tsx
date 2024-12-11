import styles from '@/styles/main-header.module.css';
import Link from 'next/link';
export const MainHeader = () =>{
    return(
        <header className={styles.fixedHeader}>
            <Link href={'/books'}>
                <h1>RGT Book Store</h1>
            </Link>
        </header>
    )
}