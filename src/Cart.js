const Cart = () => {
  const items = ["Wireless", "Power Bank", "New SSD", "Ram"];

  return (
    <>
      <h1>Cart 🛒 </h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

      <ul>
        {items.map((item) => (
          <li key={Math.random}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
