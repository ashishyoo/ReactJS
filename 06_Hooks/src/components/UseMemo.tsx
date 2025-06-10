import { useMemo, useState } from "react";
import { productList } from "../utils/products";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [products] = useState(productList);

  //   const selectedProduct = products.find((product) => product.isSelected);

  const selectedProduct = useMemo(
    () => products.find((product) => product.isSelected),
    [products]
  );

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useMemo</h1>
      <h3>Count: {count}</h3>
      <h3>Selected: {selectedProduct?.id}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseMemo;
