import products from "./productList";

function Products() {
    function logProducts(name) {
        console.log(name)
    }

    return (
        <div className="container">{products.map((item, index) => {
            return <h2 key={index} onClick={() => logProducts(item.name)}>{item.name} {item.price}</h2>
        })}</div>
    )
}

export default Products