

import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { validateObjectId } from "../../utils/ObjectValidator";



const academicDepartmentSchema = new Schema<TAcademicDepartment>(
    {
        departmentName:{
            type: String,
            required: [true, "Department name is required"]
        },
        departmentHead:{
            type: String,
            required: [true, "Department Head name is required"]
        },
        email:{
            type: String,
            required: [true, "Email is required"]
        },
        contact:{
            type: String,
        },
        academicFaculty:[{
            type: Schema.Types.ObjectId,
            ref: "AcademicFaculty",
            required: [true, "Academic Faculty reference is required"],
            validate:{
                validator: (objectid) => validateObjectId(objectid),
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
        
    },
    {
        timestamps: true
    }
)


export const AcademicDepartment = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema)