import { NextResponse } from "next/server";
import User from "@/models/user";
import connectMongoDB from "@/libs/mongodb";



export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const { name, gender,address,email,phone,password,agreeTerms} = await request.json();
      
      await connectMongoDB();
      const updateuser = await User.findByIdAndUpdate(
        id,
        { name, gender,address,email,phone,password,agreeTerms},
        { new: true }
      );
      
      if (!updateuser) {
        return NextResponse.json(
          { message: "user not found" },
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { message: "User updated", user: updateuser },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Error updating user", error: error.message },
        { status: 500 }
      );
    }
  }


  export async function GET(request, { params }) {
    try {
      await connectMongoDB();
  
      const user = await User.findOne({ id: params.id }); 
  
      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json({ user });
    } catch (error) {
      return NextResponse.json(
        { message: "Error fetching user", error: error.message },
        { status: 500 }
      );
    }
  }


  export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const { name, gender,address,email,phone,password,agreeTerms} = await request.json();
      
      await connectMongoDB();
      const updateuser = await User.findByIdAndUpdate(
        id,
        { name, gender,address,email,phone,password,agreeTerms},
        { new: true }
      );
      
      if (!updateuser) {
        return NextResponse.json(
          { message: "Topic not found" },
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { message: "User updated", topic: updatedTopic },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Error updating user", error: error.message },
        { status: 500 }
      );
    }
  }