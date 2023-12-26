import mongoose from 'mongoose';
export default async function dataBaseConnection() {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('error');
    }
}