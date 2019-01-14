import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categories: [{
    type: String
  }],
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    default: 0.0
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  created: { 
    type: Date,
    default: Date.now
  },
  updated: { 
    type: Date,
    default: Date.now
  },
  is_active: {
    type: Boolean,
    default: false
  },
  deleted: {
    is_deleted: {
      type: Boolean,
      default: false
    },
    date: Date
  }
});

productSchema.pre('save', function(next) {
  console.log('product pre save');  // TODO does it work in product update?
  if (this.deleted.isDeleted === true) this.deleted.date = Date.now();
  next();
});

export default mongoose.model('Product', productSchema);
