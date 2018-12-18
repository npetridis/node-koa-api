import mongoose from 'mongoose';

const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
});

// module.exports = mongoose.model('Movie', MovieSchema);
export default mongoose.model('Movie', MovieSchema);