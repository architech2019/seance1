import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import BookItem  from "./BookItem"
import "../styles/App.css"
import Sidebar from "./Sidebar";
import CartItem from "./CartItem";

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

  {
    id : 4,
    name : "Laravel",
    price : 35,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYmW_bFlypEDe8Q8OJLF5IaRR45fXKZDEwg&usqp=CAU"
  },
]

function App() {

  const [cart, setCart] = useState([])
  const [number, setNumber] = useState(0)
  
  useEffect(() => {
    console.log("effect")
  }, [])
  return (
    <div className="bg-light grid grid-cols-3">

      <div>
        <Sidebar/>
      </div>
      <div className="items">
        <div className="w-full grid col-3">
          {
              books.map((book) => (
                <BookItem key={book.id} book={book} cart={cart} setCart={setCart} />
              ))
          }
        </div>
      </div>
      <div>

        <CartItem cart={cart}/>
        <button onClick={() => setNumber(number + 1)}>Click</button>
      </div>

    </div>
  );
}

export default App;
