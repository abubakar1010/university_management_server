import { model, Schema } from "mongoose";
import { TStudent } from "./student.interface";
import { addressSchema, fullNameSchema, guardianSchema } from "../../models";
import { Gender } from "../../constant";
import { validateObjectId } from "../../utils/ObjectValidator";

const studentSchema = new Schema<TStudent>(
	{
		fullName: fullNameSchema,
		user: {
			type: Schema.Types.ObjectId,
			required: [true, "user reference is required"],
			ref: "User",
			validate: {
				validator: (objectid) => validateObjectId(objectid),
				message: "Data type of {VALUE} must be mongodb objectId",
			},
		},
		userid: {
			type: String,
			required: [true, "userid is required"],
		},
		gender: {
			type: String,
			enum: {
				values: Gender,
				message: "{VALUE} is not valid",
			},
		},
		dateOfBirth: {
			type: Date,
			required: [true, "Date of Birth is required"],
		},
		avatar: {
			type: String,
			required: [true, "Avatar is required"],
		},
		address: addressSchema,
		contact: [
			{
				type: String,
				require: [true, "Contact is required"],
			},
		],
		emergencyContact: {
			type: String,
			require: [true, "Emergency Contact is required"],
		},
		guardian: guardianSchema,
		localGuardian: guardianSchema,
        department: {
			type: Schema.Types.ObjectId,
			required: [true, "Department reference is required"],
			ref: "Department",
			validate: {
				validator: (objectid) => validateObjectId(objectid),
				message: "Data type of {VALUE} must be mongodb objectId",
			},
		},
        faculty: {
			type: Schema.Types.ObjectId,
			required: [true, "Academic Faculty reference is required"],
			ref: "AcademicFaculty",
			validate: {
				validator: (objectid) => validateObjectId(objectid),
				message: "Data type of {VALUE} must be mongodb objectId",
			},
		},
        admissionSemester: {
			type: Schema.Types.ObjectId,
			required: [true, "Academic Faculty reference is required"],
			ref: "AcademicFaculty",
			validate: {
				validator: (objectid) => validateObjectId(objectid),
				message: "Data type of {VALUE} must be mongodb objectId",
			},
		},
        enrolledSemester: [{
			type: Schema.Types.ObjectId,
			required: [true, "Academic Faculty reference is required"],
			ref: "AcademicSemester",
			validate: {
				validator: (objectid) => validateObjectId(objectid),
				message: "Data type of {VALUE} must be mongodb objectId",
			},
		}],
        enrolledCourses: [{
			type: Schema.Types.ObjectId,
			required: [true, "Academic Faculty reference is required"],
			ref: "Course",
			validate: {
				validator: (objectid) => validateObjectId(objectid),
				message: "Data type of {VALUE} must be mongodb objectId",
			},
		}],
        
	},
	{
		timestamps: true,
	}
);

export const Student = model<TStudent>("Student", studentSchema);
