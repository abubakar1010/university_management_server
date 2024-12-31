export  type TUserRole = "STUDENT" | "ADMIN" | "FACULTY"

export interface TUser {
    username: string;
    userid: string;
    email: string;
    password: string;
    status: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED";
    role: TUserRole;
    lastPasswordChange: Date;
}

