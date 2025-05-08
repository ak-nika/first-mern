import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg dark:bg-slate-800 bg-gray-100">
      <div className="w-full h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="text-lg font-bold mb-4">${price}</p>

        <button className="p-2 dark:bg-cyan-500 bg-cyan-300 text-xl rounded-md cursor-pointer">
          <FiEdit />
        </button>
        <button className="p-2 dark:bg-red-500 bg-red-300 hover:bg-red-500 dark:hover:bg-red-700 text-xl rounded-md ml-2 cursor-pointer">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
