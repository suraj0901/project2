import { useProducts } from "../../store/Product";
import Card from "../UI/Card";

export default ({}) => {
  const state = useProducts()[0];
  const favouriteProducts = state.products.filter(
    (product) => product.favourite
  );

  return (
    <Card className="mt-4 p-4 flex gap-4 flex-col">
      {favouriteProducts.length === 0 && (
        <p className=" md:text-xl text-center">No Favourite </p>
      )}
      {favouriteProducts.map((product) => (
        <Card className=" bg-gray-100 w-full p-2" key={product.id}>
          <p className="text-lg font-medium">{product.title}</p>
          <p>{product.description}</p>
        </Card>
      ))}
    </Card>
  );
};
