// userid: string;
//     user: Types.ObjectId;
//     fullname: TFullName;
//     designation: string;
//     dateOfBirth: Date;
//     gender: TGender;
//     contact: string[];
//     emergencyContact: string;
//     address: TAddress;
//     avatar: string;
//     academicFaculty: Types.ObjectId;
//     academicDepartment: Types.ObjectId;
//     courses: Types.ObjectId[];
//     schedule: (TSchedule & {course: Types.ObjectId})[]

import { model, Schema } from "mongoose";
import { TFaculty } from "./faculty.interface";
import { addressSchema, fullNameSchema, scheduleSchema } from "../../models";
import { Gender } from "../../constant";

const facultySchema = new Schema<TFaculty>(
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
		designation: {
			type: String,
			required: [true, "Designation is required"],
		},
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
		schedule: scheduleSchema,
		courses: [
			{
				type: Schema.ObjectId,
				ref: "Course",
				required: [true, "Course reference is required"],
			},
		],
		academicDepartment: {
			type: Schema.ObjectId,
			ref: "AcademicDepartment",
			required: [true, "Academic department reference is required"],
		},
		academicFaculty: {
			type: Schema.ObjectId,
			ref: "AcademicFaculty",
			required: [true, "Academic faculty reference is required"],
		},
	},
	{
		timestamps: true,
	}
);


export const Faculty = model<TFaculty>("Faculty", facultySchema)
