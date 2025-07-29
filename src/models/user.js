import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
      },
      gender: {
        type: String,
        required: [true, "Gender is required"],
        trim: true,
        enum: ['male', 'female', 'other', 'prefer-not-to-say']
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true
      },
      phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8
      },
      address: {
        type: String,
        required: [true, "Address is required"],
        trim: true
      }
    },
    {
      timestamps: true,
    }
  );
const User = mongoose.models.User || mongoose.model("dUser", userSchema);

export default User;