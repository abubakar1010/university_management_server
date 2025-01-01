import { Types } from "mongoose";
import { TAddress, TFullName, TGender, TSchedule } from "../../types";

export type TFaculty = {
	userid: string;
	user: Types.ObjectId;
	fullname: TFullName;
	designation: string;
	dateOfBirth: Date;
	gender: TGender;
	contact: string[];
	emergencyContact: string;
    address: TAddress;
    avatar: string;
    academicFaculty: Types.ObjectId;
    academicDepartment: Types.ObjectId;
    courses: Types.ObjectId[];
    schedule: (TSchedule & {course: Types.ObjectId})[]
};



