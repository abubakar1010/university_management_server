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
		email: {
			type: String,
			required: [true, " email address is required"],
		},
		contact: {
			type: String,
			required: [true, "contact number  is required"],
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
