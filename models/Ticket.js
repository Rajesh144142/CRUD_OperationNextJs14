import mongoose, { Schema } from 'mongoose';
mongoose.Promise = global.Promise;

const ticketSchema = new Schema({
    title: String,
    description: String, 
    category: String,
    priority: String,
    status: String,
    progress:String,
    active: Boolean
},
{
    timestamps: true,
});

const Ticket =mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);
export default Ticket;
