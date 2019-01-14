import { Product } from '../models';

// const projection = '_id title genre rating';

const Products = {};

Products.getAllProducts = () => Product.find({});

Products.getProductById = id => Product.findById(id);

Products.saveProduct = product => {
  // const newProduct = new Product();
  // product.categories.forEach(category)
  // newProduct.categories.push(...product.categories)
  // newProduct.save();
  return new Product(product).save()
};

// Products.updateProduct = (id, product) => Product.findOneAndUpdate({ _id: id }, product);

// Products.deleteProduct = id => Product.findByIdAndDelete(id);

export default Products;