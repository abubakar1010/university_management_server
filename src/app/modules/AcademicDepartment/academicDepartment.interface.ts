import { Types } from "mongoose";

export type TAcademicDepartment = {
	departmentName: string;
	departmentMembers: Types.ObjectId[];
	academicFaculty: Types.ObjectId[];
	departmentStudents: Types.ObjectId[];
	departmentCourses: Types.ObjectId[];
};
