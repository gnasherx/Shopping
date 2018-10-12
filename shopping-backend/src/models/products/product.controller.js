import Product from "./product.model";

export const newProduct = async (req, res) => {
  const { brand, name, img, price } = req.body;
  await new Product({
    brand: brand,
    name: name,
    img: img,
    price: price
  })
    .save()
    .then(product => {
      res.status(201).json({
        error: false,
        product,
        product,
        Message: "New product added."
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        message: `Failed to add new product, ${err}`
      });
    });
};

export const getAllProducts = async (req, res) => {
  try {
    return res.status(200).json({
      products: await Product.find({})
    });
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      messgae: `Error while getting all products: ${error}`
    });
  }
};
