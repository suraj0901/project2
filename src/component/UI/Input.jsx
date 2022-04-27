export default ({ type, label, onClick }) => {
  const id = Date.now().toString();
  return (
    <section className="flex flex-col gap-2 mb-4">
      <label className="md:text-xl font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className="border py-1 px-2 rounded"
        type={type}
        id={id}
        onClick={onClick}
      />
    </section>
  );
};
