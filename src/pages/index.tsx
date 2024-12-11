import Link from "next/link";



const HomePage = () => {

    return( 
        <section>
                <Link href={'/books'}>
                        <button>
                                책 구경하기
                        </button>
                </Link>
        </section>
    )
}

export default HomePage;