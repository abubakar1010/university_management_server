import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";


const academicFacultySchema = new Schema<TAcademicFaculty>(
    {
        facultyName:{
            type: String,
            required: [true, "Faculty name is required"]
        },
        facultyCourses:[{
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: [true, "Course id is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
        facultyMembers:[{
            type: Schema.Types.ObjectId,
            ref: "Faculty",
            required: [true, "Reference ID is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
        facultyDepartments:[{
            type: Schema.Types.ObjectId,
            ref: "AcademicDepartment",
            required: [true, "Reference ID is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
        facultyStudents:[{
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: [true, "Reference ID is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        }],
    },
    {
        timestamps: true
    }
)


export const AcademicFaculty = model<TAcademicFaculty>("AcademicFaculty", academicFacultySchema)