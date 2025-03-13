import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

export const Blog = mongoose.model("Product", ProductSchema);
