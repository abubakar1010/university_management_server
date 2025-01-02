import { Types } from "mongoose";
import { TAddress, TFullName, TGuardian } from "../../types";



export type TStudent = {
	user: Types.ObjectId;
	userid: string;
	fullName: TFullName;
	gender: "MALE" | "FEMALE";
	dateOfBirth: Date;
	avatar: string;
	address: TAddress;
	contact: string[];
	emergencyContact: string;
	guardian: TGuardian;
    localGuardian: TGuardian;
	admissionSemester: Types.ObjectId;
	enrolledSemester: Types.ObjectId[];
	department: Types.ObjectId;
	faculty: Types.ObjectId;
	enrolledCourses: Types.ObjectId[];
};
