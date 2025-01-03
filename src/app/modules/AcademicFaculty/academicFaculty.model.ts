import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<TAcademicFaculty>(
	{
		academicFacultyName: {
			type: String,
			required: [true, "Faculty name is required"],
		},
		dean: {
			type: String,
			required: [true, "Dean name is required"],
		},
		contactEmail: {
			type: String,
			required: [true, "contact email name is required"],
		},
		contactPhone: {
			type: String,
			required: [true, "contact phone name is required"],
		},
		location: {
			type: String,
			required: [true, "location is required"],
		},
		stablishYear:{
			type: Date,
			required: [true, "Stablish year is required"]
		}
	},
	{
		timestamps: true,
	}
);

export const AcademicFaculty = model<TAcademicFaculty>(
	"AcademicFaculty",
	academicFacultySchema
);
