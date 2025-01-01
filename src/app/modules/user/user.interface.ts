import { TStatus, TUserRole } from "../../types";

export type TUser =  {
    userid: string;
    email: string;
    password: string;
    status: TStatus;
    role: TUserRole;
    lastPasswordChange: Date;
}

export type TLoginCredential = {
    userid: string;
    password: string
}