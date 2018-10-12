import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Brand name is required."]
  },
  name: {
    type: String,
    required: [true, "Product name is required."]
  },
  img: {
    type: String,
    required: [true, "Product image url is required."]
  },
  price: {
    type: Number,
    required: [true, "Product price is required."]
  }
});

export default mongoose.model("Product", ProductSchema);
