// pages/api/user/login.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';

export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse request body
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid JSON body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { email, password } = requestBody;

    // Validate inputs
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: 'Email and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Find user
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: 'No account found with this email' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse(
        JSON.stringify({ message: 'Incorrect password' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Return success response
    return new NextResponse(
      JSON.stringify({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Login error:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}