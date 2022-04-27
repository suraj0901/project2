import { useProducts } from "../../store/Product";
import Product from "./Product";

export default () => {
  const [state, action] = useProducts();
  return (
    <div className="flex flex-col gap-4 mt-4">
      {state.products.map((product) => (
        <Product
          key={product.id}
          data={product}
          handleFavourite={() => action.udpateFavourite(product.id)}
        />
      ))}
    </div>
  );
};
