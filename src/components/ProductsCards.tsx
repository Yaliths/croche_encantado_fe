function ListCards() {
  let products = [
    { id: 1, name: "Card 1", price: 10.0 },
    { id: 2, name: "Card 2", price: 15.0 },
    { id: 3, name: "Card 3", price: 20.0 },
  ];
  

  return (
    <>
          <h1>Welcome to Croche Encantado</h1>
        <h2>Product List</h2>
        {products.length === 0 && <p>No products available</p>}
      {products.map((product) => (
        <>
          <p key={product.id}>{product.name}</p>
          <p>{product.price}</p>
        </>
      ))}
    </>
  );
}
export default ListCards;
