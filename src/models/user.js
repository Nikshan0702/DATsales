import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        gender: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        phone: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        password: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        address: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        agreeTerms: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },

    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("dUser", userSchema);

export default User;