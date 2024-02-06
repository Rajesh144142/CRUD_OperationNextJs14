import { NextResponse } from 'next/server';
import dataBaseConnection from '@/lib/dataBaseConnection';
import User from '@/models/User'
export async function GET(req) {
    try {
        await dataBaseConnection();
        const response = await User.find();
        return NextResponse.json({ msg: 'All User', AllUser: response }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Ticket is not Created' }, { status: 500 });
    }
}
export async function POST(req) {
    try {
        const body = await req.json();
        const { username, password, email } = body;
        const response = await User.create({
            username, password, email
        });
        return NextResponse.json({ msg: 'Ticket is Created', data: response }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Ticket is not Created' }, { status: 500 });
    }
}
export async function DELETE(req) {
    try {
        const body = await req.json();
        const { id } = body;
        const response = await User.findByIdAndDelete(id);
        return NextResponse.json({ msg: 'User Deleted Successfully', response }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Some thing is wrong..' }, { status: 500 });
    }
}
export async function PUT(req) {
    try {
        const body = await req.json();
        const { id } = body;
        await User.updateOne({ _id: id }, { $set: { username: "Rajesh", email: "rajeshkh704435@gmail.com" } })
        return NextResponse.json({ msg: 'User Deleted Successfully', response }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Some thing is wrong..' }, { status: 500 });
    }
}
