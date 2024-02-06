import bcrypt from 'bcryptjs'
import User from '@/models/User';
import dataBaseConnection from '@/lib/dataBaseConnection';
import { NextResponse } from 'next/server';
export const POST = async (req) => {
    try {
        await dataBaseConnection();
        const body = await req.json();
        const { username, email, password } = body;
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already existed" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username, email, password: hashedPassword
        })
        await newUser.save();
        return NextResponse.json({ message: "Registration successfull" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}