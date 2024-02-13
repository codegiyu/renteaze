import mongoose from "mongoose";

function userModel() {
    const userSchema = new mongoose.Schema({
        email: { 
            type: String, 
            unique: true, 
            required: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        phone: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ["Agent", "Developer", "Landlord", "User"],
            default: "User"
        }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    userSchema.set('toJSON', {
        virtuals: true,
        versionKey: true,
        // transform: function (doc, ret) {
        //     delete ret._id;
        //     delete ret.hash;
        // }
    });

    return mongoose.models.User || mongoose.model('User', userSchema);
}

export {
    userModel
}