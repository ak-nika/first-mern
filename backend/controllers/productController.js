import mongoose from "mongoose";
import Product from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No products found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Products retrieved successfully",
      results: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "Failed",
        message: "Product ID is required",
      });
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid Product ID",
      });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Product retrieved successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      return res
        .status(400)
        .json({ status: "Failed", message: "All fields are required" });
    }

    const product = await Product.create({
      name,
      price,
      image,
    });
    res.status(201).json({
      status: "Success",
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image } = req.body;
    if (!id) {
      return res.status(400).json({
        status: "Failed",
        message: "Product ID is required",
      });
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid Product ID",
      });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        status: "Failed",
        message: "Product ID is required",
      });
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid Product ID",
      });
    }

    await Product.findByIdAndDelete(id);
    res.status(204).json({
      status: "Success",
      message: "Product deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};

export { getAllProducts, addProduct, getProduct, updateProduct, deleteProduct };
