import products from "./productList";
function Products() {
  return (
    <div className="container">
      {products.map((product) => {
        return (
          <>
            <h2>Product List</h2>
            <h2>{`${product.name}`}</h2>
            <h2>{`${product.price}`}</h2>;
          </>
        );
      })}
      <h2>Product List</h2>
    </div>
  );
}

export default Products;
