import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/product";
import { toast, ToastContainer } from "react-toastify";

const EditPage = () => {
  const { id } = useParams();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { updateProduct } = useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setNewProduct(data.data);
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await updateProduct(id, newProduct);

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

      setNewProduct({ name: "", price: "", image: "" });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: localStorage.getItem("theme"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Edit Product</h1>

      <form
        action="/"
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-bold">Product Name:</span>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="w-full px-4 py-2 border-gray-300 border-2 rounded-md outline-none dark:border-gray-700 focus:border-cyan-400"
          />
        </label>

        <label>
          <span className="font-bold">Product Price:</span>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="w-full px-4 py-2 border-gray-300 border-2 rounded-md outline-none dark:border-gray-700 focus:border-cyan-400"
          />
        </label>

        <label>
          <span className="font-bold">Product Image:</span>
          <input
            type="text"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="w-full px-4 py-2 border-gray-300 border-2 rounded-md outline-none dark:border-gray-700 focus:border-cyan-400"
          />
        </label>

        <button
          type="submit"
          className="cursor-pointer dark:bg-blue-600 bg-cyan-300 dark:text-white text-gray-900 dark:hover:bg-blue-800 hover:bg-cyan-400 py-2 rounded-md font-[500]"
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditPage;
