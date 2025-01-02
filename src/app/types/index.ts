export type TFullName = {
	firstName: string;
	lastName: string;
};

export type TGender = "MALE" | "FEMALE";

export type TUserRole = "STUDENT" | "ADMIN" | "FACULTY";

export type TUserStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED";

export type TSemesterStatus = "UPCOMING" | "ONGOING" | "ENDED"

export type TAddress = {
	presentAddress: string;
	permanentAddress: string;
};

export type TSchedule = {
	day: string;
	time: string;
};

export type TGuardian = {
	fullName: TFullName;
	address: string;
	contact: string[];
	occupation: string;
};

export type TDuration = {
	start: Date;
	end: Date;
};
