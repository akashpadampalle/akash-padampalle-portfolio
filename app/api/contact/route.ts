import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/configs/connectDB";
import Contact, { IContact } from "@/models/Contact";


export async function POST(request: NextRequest) {
    try {

        const { name, contact, email, details }: IContact = await request.json();

        // validation
        if (
            !name || typeof name !== 'string' ||
            (contact && typeof contact !== 'string') ||
            (email && typeof email !== 'string') ||
            (details && typeof details !== 'string')
        ) {
            return NextResponse.json({ message: 'Invalide data recieved. please check required data and their type.' }, { status: 400 });
        }

        // connecting to db
        await connectDB();

        const response = await Contact.create({ name, contact, email, details });
        return NextResponse.json(response, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
}