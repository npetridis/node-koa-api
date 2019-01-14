import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model('Category', categorySchema);
