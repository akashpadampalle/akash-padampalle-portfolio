import mongoose, { Schema, model, models } from "mongoose";

export interface IContact {
    name: string,
    contact: string,
    email: string,
    details: string
}

// creating contact schema
const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: String,
    email: String,
    details: String
});

const Contact = models.Contact || model('Contact', ContactSchema);
export default Contact;