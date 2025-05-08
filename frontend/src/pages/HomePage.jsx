import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { getProducts, products } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log(products);
  return (
    <section className="max-w-[1140px] mx-auto py-12 flex flex-col gap-4">
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text text-2xl md:text-3xl font-bold text-center">
        Current Products
      </h1>

      {products.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-center font-bold text-xl mt-4 dark:text-slate-400 text-gray-700">
            No products found
          </p>
          <Link
            to="/create"
            className="block text-center text-lg dark:text-slate-600 font-bold hover:underline text-gray-500"
          >
            Create a new product
          </Link>
        </>
      )}
    </section>
  );
};

export default HomePage;
