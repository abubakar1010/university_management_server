import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
    {
        userid: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: function(v){
                    return /^[a-z0-9\\._%+!$&*=^|~#%'`?{}/\\-]+@([a-z0-9\\-]+\\.){1,}([a-z]{2,16})$/.test(v)
                },
                message: props => `${props.value} is not valid email`,            }
        },
        password: {
            type: String,
            required: [true, "why you don't provide a password"]
        },
        role: {
            type: String,
            enum: ["STUDENT", "FACULTY", "ADMIN"],
            required: true
        },
        status: {
            type: String,
            enum: ["PENDING" , "ACCEPTED" , "REJECTED" , "BLOCKED"],
            default: "PENDING",
            required: true
        },
        lastPasswordChange: {
            type: Date,
            required: true
        },
        
    }
)


const User = model<TUser>("User", userSchema)

export default User;