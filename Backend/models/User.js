import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,    // ✅ must have Full Name
        trim: true
    },
    email: {
        type: String,
        required: true,    // ✅ must have email
        unique: true,      // ✅ cannot allow duplicate emails
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,    // ✅ must have password
    },
    profile: {
        type: String,
        default: "",       // ✅ if no profile image, default empty string
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);  // 🛠️ corrected from Modal -> Model

export default UserModel;
