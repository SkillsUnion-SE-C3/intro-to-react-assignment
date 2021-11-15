import products from './productList'

function Products() {
    function logProduct(name, price) {
        console.log("log product" + name + price)
    }

    return (
        <div className="Container">Product List:-{products.map((product) => {
            return <h2 key={product.name} onClick={() => logProduct(product.name + product.price)}>{product.name + product.price}</h2>
        })}</div>
    )
}

export default Products;