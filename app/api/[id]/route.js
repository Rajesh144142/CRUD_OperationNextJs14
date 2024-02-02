import Ticket from '@/models/Ticket';
import { NextResponse } from 'next/server';
export async function GET(req, { params }) {
    try {
        const foundTicket = await Ticket.findById(params.id);
        return NextResponse.json({ foundTicket }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Error", error }, { status: 500 });
    }
}


export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const body = await req.json();
        const response=await Ticket.findByIdAndUpdate(id, {
            ...body,
        });
        return NextResponse.json({ msg: "Ticket Updated...",data:response }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Error", error }, { status: 500 });
    }
}


export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Ticket deleted...",id }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Error", error }, { status: 500 });
    }
}