
import { model, Schema } from "mongoose";
import { TCourse } from "./course.interface";

const courseSchema = new Schema<TCourse>(
    {
        courseName:{
            type: String,
            required: [true, "Course name is require"]
        },
        code:{
            type: Number,
            required: [true, "Course code is require"]
        },
        prefix:{
            type: String,
            required: [true, "Prefix is require"]
        },
        courseTitle:{
            type: String,
            required: [true, "Course name is require"]
        },
        prerequisite: [
            {
                type: Schema.ObjectId,
                required: [true, "Prerequisite course reference is required"]
            }
        ]

    },
    {
        timestamps: true
    }
)

export const Course = model<TCourse>("Course", courseSchema)