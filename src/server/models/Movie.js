import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Movie', movieSchema);
