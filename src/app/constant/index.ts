import { TUserStatus, TUserRole, TSemesterStatus } from "../types";

const Gender: ["MALE", "FEMALE"] = ["MALE", "FEMALE"];

const UserROle: TUserRole[] = ["STUDENT", "FACULTY", "ADMIN"];

const UserStatus: TUserStatus[] = ["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"];

const SemesterStatus: TSemesterStatus[] = ["UPCOMING", "ONGOING", "ENDED"]


export { Gender, UserROle, UserStatus, SemesterStatus };
