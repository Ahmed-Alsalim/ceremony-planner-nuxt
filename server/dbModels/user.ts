import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, bcrypt: true, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'user' },
  token: { type: String },
}, { timestamps: true });

userSchema.plugin(bcrypt);

export default mongoose.model('User', userSchema, 'users');