export default ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-md shadow-sm w-11/12 max-w-3xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
