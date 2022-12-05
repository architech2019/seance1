import "../styles/Navbar.css"


function Navbar(){
    const title = "OnlineBook"
    return(
        <div>
            <h1 id="title" className="bg-red">
                { title }
            </h1>

        </div>
    );
}

export default Navbar