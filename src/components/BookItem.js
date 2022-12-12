import "../styles/BookItem.css"

function BookItem({book, cart, setCart}){

    return(
        <div className="card m bg-white">
            <div>
                <img src={book.image}/>
            </div>
            <div className="m">
                <h3>{book.name}</h3>
                <div>{book.price}</div>
            </div>

            <button onClick={() => setCart([...cart, book])}>buy</button>
        </div>
    )
}

export default BookItem