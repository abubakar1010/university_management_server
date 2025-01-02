import { Schema } from "mongoose";
import { TAddress, TFullName, TGuardian, TSchedule } from "../types";

const fullNameSchema = new Schema<TFullName>(
	{
		firstName: {
            type: String,
            trim: true,
            required: [true, "first name is required"]
        },
		lastName: {
            type: String,
            trim: true,
            required: [true, "last name is required"]
        },
	},
	{
		_id: false,
	}
);

const guardianSchema = new Schema<TGuardian>(
    {
        fullName: fullNameSchema,
        address: {
            type: String,
            required: [true, "address is required"]
        },
        occupation: {
            type: String,
            required: [true, "occupation is required"]
        },
        contact: {
            type: [
                {
                    type: String,
                    trim: true,
                    required: [true, "Contact is required"]
                }
            ],
            required: [true, "contact is required"]
        }

    },
    {
        _id: false
    }
)


const addressSchema = new Schema<TAddress>(
    {
        presentAddress:{
            type: String,
            required: [true, "Present address is required"]
        },
        permanentAddress:{
            type: String,
            required: [true, "Permanent address is required"]
        },

    },
    {
        _id: false
    }
)
const scheduleSchema = new Schema<TSchedule>(
    {
        day:{
            type: String,
            required: [true, "Day is required"]
        },
        time:{
            type: String,
            required: [true, "Time is required"]
        }

    },
    {
        _id: false
    }
)
// const guardianSchema = new Schema(
//     {

//     },
//     {
//         _id: false
//     }
// )
// const guardianSchema = new Schema(
//     {

//     },
//     {
//         _id: false
//     }
// )


export {
    fullNameSchema,
    guardianSchema,
    addressSchema,
    scheduleSchema
    
}