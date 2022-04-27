import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

export default ({}) => {
  const [showModel, setShowModel] = useState(false);
  const handleModel = () => setShowModel((show) => !show);
  return (
    <div className="">
      <Card className="p-4 mt-4 flex flex-col">
        <Button className="self-end" onClick={handleModel}>
          Add Product
        </Button>
        <ProductList />
      </Card>
      {showModel && <AddProduct closeModel={handleModel} />}
    </div>
  );
};
