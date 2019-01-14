import { Category } from '../models';

const projection = '_id title genre rating';

const Categories = {};

Categories.getAllCategories = () => Category.find({});

// Categories.getCategoryById = id => Category.findById(id);

Categories.saveCategory = category => new Category(category).save();

// Categories.updateCategory = (id, category) => Category.findOneAndUpdate({ _id: id }, category);

// Categories.deleteCategory = id => Category.findByIdAndDelete(id);

export default Categories;