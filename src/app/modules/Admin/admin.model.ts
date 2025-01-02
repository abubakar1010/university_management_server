

import { model, Schema } from "mongoose";
import { TAdmin } from "./admin.interface";
import { addressSchema, fullNameSchema } from "../../models";
import { Gender } from "../../constant";

    

const adminSchema = new Schema<TAdmin>(
    {
        user: {
			type: Schema.ObjectId,
            ref: "User",
			required: [true, "User reference is required"],
		},
		userid: {
			type: String,
			required: [true, "Userid is required"],
		},
		fullname: fullNameSchema,
		dateOfBirth: {
			type: Date,
			required: [true, "Birth date is required"],
		},
		gender: {
			type: String,
			enum: {
				values: Gender,
				message: "{VALUE} is not valid ",
			},
			required: true,
		},
		contact: [
			{
				type: String,
				required: [true, "Contact is required"],
			},
		],
		emergencyContact: {
			type: String,
			required: [true, "Emergency contact is required"],
		},
		avatar: {
			type: String,
			required: [true, "Avatar is required"],
		},
		address: addressSchema,
    },
    {
        timestamps: true
    }
)

export const Admin = model<TAdmin>("Admin", adminSchema)