import { Types } from "mongoose";

export type TAcademicDepartment = {
	departmentName: string;
	academicFaculty: Types.ObjectId;
	departmentHead: string;
	email: string;
	contact?: string;
};
