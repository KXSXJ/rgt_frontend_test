import { selectAllBooks } from "@/lib/db";


 async function HomePage(){
    const data = await selectAllBooks();
    const books = JSON.parse(JSON.stringify(data))
    console.log(books)
    return(
        <div>
            <h1>Book List</h1>
        </div>
    )
}

export default HomePage;