import React from "react";
export default ({ onChangePage, current, menu }) => {
  const handleClick = (page) => {
    if (page !== current) onChangePage(page);
  };
  return (
    <ul className="flex justify-center gap-8 bg-violet-500 text-white text-lg font-medium">
      {Object.values(menu).map((page) => (
        <li
          key={page}
          onClick={() => handleClick(page)}
          className={`p-4 hover:bg-violet-700 ${
            current == page ? "bg-violet-800" : ""
          }`}
        >
          {page.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};
