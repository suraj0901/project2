import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";

export default ({ closeModel }) => {
  const addProduct = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed backdrop-blur-sm top-0 left-0 w-screen h-screen grid place-items-center">
      <Card className="px-4 py-8">
        <form>
          <Input type="text" label="Product" />
          <Input type="text" label="Details" />
          <section className="flex flex-col md:flex-row justify-end gap-4">
            <Button onClick={addProduct}>Add Item</Button>
            <Button onClick={closeModel}>Cancel</Button>
          </section>
        </form>
      </Card>
    </div>
  );
};
