// departmentName: string;
//     departmentMembers: Types.ObjectId[];
//     academicFaculty: Types.ObjectId[];
//     departmentStudents: Types.ObjectId[];
//     departmentCourses: Types.ObjectId[];

import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { validateObjectId } from "../../utils/ObjectValidator";



const academicDepartmentSchema = new Schema<TAcademicDepartment>(
    {
        departmentName:{
            type: String,
            required: [true, "Department name is required"]
        },
        departmentCourses:[{
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: [true, "Course id is required"],
            validate:{
                validator: (objectid) => validateObjectId(objectid),
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
        departmentMembers:[{
            type: Schema.Types.ObjectId,
            ref: "Faculty",
            required: [true, "Reference ID is required"],
            validate:{
                validator: (objectid) => validateObjectId(objectid),
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
        departmentStudents:[{
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: [true, "Reference ID is required"],
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