import products from "./productList";

function Products() {
    return (
    <div className="container">
        <h2>Product List</h2>
        {products.map ((product) => {
            return(
                <p onClick={()=> console.log(product.name)}>{product.name} {product.price}</p>
            )
        })}
    </div>
    )
}

export default Products