import { useState } from "react";
import { useProductStore } from "../store/product";
import { ToastContainer, toast } from "react-toastify";

const CreatePage = () => {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { createProduct } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await createProduct(product);
      if (res.status === "Failed") {
        return toast.error(res.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: localStorage.getItem("theme"),
        });
      }

      toast.success(res.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: localStorage.getItem("theme"),
      });

      setProduct({ name: "", price: "", image: "" });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="max-w-[1140px] px-4 mx-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">Create new Product</h1>

        <form
          className="bg-white dark:bg-gray-800 p-6 rounded-md shadow flex flex-col gap-4"
          action="/"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={product.name}
            placeholder="Product name"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="px-4 py-2 border-gray-300 border-2 rounded-md outline-none dark:border-gray-700 focus:border-cyan-400"
          />
          <input
            type="number"
            value={product.price}
            placeholder="Product price"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="px-4 py-2 border-gray-300 border-2 rounded-md outline-none dark:border-gray-700 focus:border-cyan-400"
          />
          <input
            type="text"
            value={product.image}
            placeholder="Product image"
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            className="px-4 py-2 border-gray-300 border-2 rounded-md outline-none dark:border-gray-700 focus:border-cyan-400"
          />

          <button
            type="submit"
            className="cursor-pointer dark:bg-blue-600 bg-cyan-300 dark:text-white text-gray-900 dark:hover:bg-blue-800 hover:bg-cyan-400 py-2 rounded-md font-[500]"
          >
            {isLoading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default CreatePage;
