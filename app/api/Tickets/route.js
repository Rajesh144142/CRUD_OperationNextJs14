import { NextResponse } from 'next/server';
import dataBaseConnection from '@/lib/dataBaseConnection';
import Ticket from '@/models/Ticket';

export async function POST(req) {
    try {
        await dataBaseConnection(); // Assuming this function is correctly defined
        const body = await req.json();
        const response = await Ticket.insertMany(body);
        return NextResponse.json({ msg: 'Ticket is Created',data:response}, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Ticket is not Created' }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await dataBaseConnection(); // Assuming this function is correctly defined
        const tickets = await Ticket.find();
        return NextResponse.json({ tickets: tickets }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Error' }, { status: 500 });
    }
}
