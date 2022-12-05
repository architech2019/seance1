import Navbar from "./Navbar";
import BookItem  from "./BookItem"
import "../styles/App.css"

const books = [
  {
    id : 1,
    name : "JavaScript",
    price : 10,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYmW_bFlypEDe8Q8OJLF5IaRR45fXKZDEwg&usqp=CAU"
  },
  {
    id : 2,
    name : "PHP",
    price : 26,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYmW_bFlypEDe8Q8OJLF5IaRR45fXKZDEwg&usqp=CAU"

  },
  {
    id : 3,
    name : "TypeScript",
    price : 35,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYmW_bFlypEDe8Q8OJLF5IaRR45fXKZDEwg&usqp=CAU"

  },
]
function App() {
  return (
    <div className="bg-light">
      <Navbar/>
      <div className="flex col-3">
        {
            books.map((book) => (
              <BookItem key={book.id} book={book} />
            ))
        }
      </div>
    </div>
  );
}

export default App;
