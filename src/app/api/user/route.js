import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';



export async function POST(request) {
  try {
    await connectMongoDB();
    
    const { name, gender, address, email, phone, password } = await request.json();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { error: 'Name, email, phone and password are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create new user (password will be hashed by pre-save hook)
    const newUser = new User({
      name,
      gender,
      address,
      email,
      phone,
      password: hashedPassword
    });

    await newUser.save();

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}