import { TGender, TStatus, TUserRole } from "../types";

const Gender: TGender[] = ["MALE", "FEMALE"];

const UserROle: TUserRole[] = ["STUDENT", "FACULTY", "ADMIN"];

const Status: TStatus[] = ["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"];

export {
    Gender,
    UserROle,
    Status
}