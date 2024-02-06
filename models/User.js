import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        reqired: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requird: true,
        unique: true
    }
}, {
    timestamps: true,
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;