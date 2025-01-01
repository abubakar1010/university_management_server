import { model, Schema } from "mongoose";
import { TStudent } from "./student.interface";
import { addressSchema, fullNameSchema, guardianSchema } from "../../models";
import { Gender } from "../../constant";


const studentSchema = new Schema<TStudent>(
    {
        fullName: fullNameSchema,
        user:{
            type: Schema.Types.ObjectId,
            required: [true,"user reference is required"],
            ref: "User",
            validate:{
                validator: function(ObjectId){
                    return /^[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,16})$/.test(ObjectId)
                },
                message: props => `${props.value} is invalid objectId`
            }
            
        },
        userid:{
            type: String,
            required: [true, "userid is required"]
        },
        gender:{
            type: String,
            enum:{
                values: Gender,
                message: '{VALUE} is not valid'
            }
        },
        dateOfBirth:{
            type: Date,
            required: [true, "Date of Birth is required"]
        },
        avatar:{
            type: String,
            required: [true, "Avatar is required"]
        },
        address: addressSchema,
        contact:[{
            type:String,
            require: [true, "Contact is required"]
        }],
        emergencyContact:{
            type:String,
            require: [true, "Emergency Contact is required"]
        },
        guardian: guardianSchema,
        localGuardian: guardianSchema
    },
    {
        timestamps: true
    }
)

export const Student = model<TStudent>("Student", studentSchema)