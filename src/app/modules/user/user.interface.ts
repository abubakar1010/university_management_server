import { TUserStatus, TUserRole } from "../../types";

export type TUser = {
	userid: string;
	email: string;
	password: string;
	status: TUserStatus;
	role: TUserRole;
	lastPasswordChange: Date;
};

export type TLoginCredential = {
	userid: string;
	password: string;
};
