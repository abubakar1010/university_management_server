import { model, Schema } from "mongoose";
import { scheduleSchema } from "../../models";
import { TOfferedCourse } from "./offeredCourse.interface";

const offeredCourseSchema = new Schema<TOfferedCourse>(
    {
        course:{
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: [true, "Course id is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        },
        academicFaculty:{
            type: Schema.Types.ObjectId,
            ref: "AcademicFaculty",
            required: [true, "Reference ID is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        },
        academicDepartment:{
            type: Schema.Types.ObjectId,
            ref: "AcademicDepartment",
            required: [true, "Reference ID is required"],
            validate:{
                validator: function(objectId){
                    return /^[a-fA-F0-9]{24}$/.test(objectId)
                },
                message: 'Data type of {VALUE} must be mongodb objectId'
            }
        },
        faculties:[{
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
        capacity:{
            type: Number,
            required: [true, "capacity is required"]
        },
        schedule: scheduleSchema,
        section:{
            type: String,
            required: [true, "Section is required"]
        },



    },
    {
        timestamps: true
    }
)

const OfferedCourse = model<TOfferedCourse>("OfferedCourse", offeredCourseSchema)

export default OfferedCourse