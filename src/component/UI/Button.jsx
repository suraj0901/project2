export default ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`bg-red-700 py-2 px-4 rounded hover:bg-red-600 font-medium md:text-xl text-white   ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
