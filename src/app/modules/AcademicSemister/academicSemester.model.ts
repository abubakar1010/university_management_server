import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { SemesterStatus } from "../../constant";
import { durationSchema } from "../../models";

const academicSemesterSchema = new Schema<TAcademicSemester>(
    {
        semesterName:{
            type: String,
            required: [true, "Semester name is required"]
        },
        semesterCode:{
            type: String,
            required: [true, "Semester code is required"]
        },
        year:{
            type: Date,
            required: [true, "Semester code is required"]
        },
        deadline:{
            type: Date,
            required: [true, "Deadline is required"]
        },
        status:{
            type: String,
            enum: SemesterStatus,
            required: [true, "Semester status is required"],
        },
        duration: durationSchema
     
    },
    {
        timestamps: true
    }
)

export const AcademicSemester = model("AcademicSemester", academicSemesterSchema)