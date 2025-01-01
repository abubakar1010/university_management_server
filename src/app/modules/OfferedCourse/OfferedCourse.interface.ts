import { Types } from "mongoose"
import { TSchedule } from "../../types";


export type TOfferedCourse = {
    course: Types.ObjectId;
    faculty: Types.ObjectId;
    academicFaculty: Types.ObjectId;
    academicDepartment: Types.ObjectId;
    capacity: number;
    section: string;
    schedule: TSchedule[]
}