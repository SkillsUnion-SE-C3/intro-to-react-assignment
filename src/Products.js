import products from "./productList";


function ProductsComponent() {
    function logProducts(name, price) {
        console.log(name,'£', price)
    }
    return (
        <div>{products.map((product, index) => {
            return (
                <div>
                    <h2 key={index} onClick={() => logProducts(product.name, product.price)}>{product.name}</h2>
                    <h3>£{product.price}</h3>
                </div>
            )
        })}</div>
    )
}

export default ProductsComponent