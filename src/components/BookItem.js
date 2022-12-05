import "../styles/BookItem.css"


function BookItem(props){

    const {book} = props
    return(
        <div className="card m bg-white">
            <div>
                <img src={book.image}/>
            </div>
            <div className="m">
                <h3>{book.name}</h3>
                <div>{book.price}</div>
            </div>
        </div>
    )
}

export default BookItem