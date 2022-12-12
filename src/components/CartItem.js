function CartItem({cart}){
    return(
        <div>
            <h1>Mon panier</h1>
            <div>
                {
                    cart.map((c, index) => (
                        <div key={`${c}-${index}`}>{c.name} -- {c.price}$</div>
                    ))
                }
            </div>
        </div>
    );
}


export default CartItem