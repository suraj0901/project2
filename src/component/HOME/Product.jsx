import Button from "../UI/Button";

export default ({
  data: { title, description, price, image, favourite },
  handleFavourite,
}) => {
  return (
    <div className="p-2 rounded shadow bg-gray-50">
      <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
        <img className="md:w-28 w-40" src={image} alt={title} />
        <div>
          <p className="text-lg font-medium">{title}</p>
          <p>{description}</p>
          <p className="text-2xl font-semibold text-gray-700">${price}</p>
        </div>
      </div>
      <Button
        onClick={handleFavourite}
        className={`${
          favourite
            ? "bg-gray-50 border border-red-500 text-black hover:text-white hover:bg-red-600"
            : " "
        }`}
      >
        {favourite ? "Unfavourite " : "Add to Favourite"}
      </Button>
    </div>
  );
};
