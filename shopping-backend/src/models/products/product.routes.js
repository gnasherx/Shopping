import { Router } from "express";
import * as ProductController from "./product.controller";

const routes = new Router();
routes.post("/add-product", ProductController.newProduct);
routes.get("/products", ProductController.getAllProducts);

export default routes;
