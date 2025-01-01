import { Types } from "mongoose"

export type TAcademicFaculty = {
    facultyName: string;
    facultyMembers: Types.ObjectId[];
    facultyDepartments: Types.ObjectId[];
    facultyStudents: Types.ObjectId[];
    facultyCourses: Types.ObjectId[];
}