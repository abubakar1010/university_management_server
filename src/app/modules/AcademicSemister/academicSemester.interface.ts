import { TDuration, TSemesterStatus } from "../../types";

export type TAcademicSemester = {
    semesterName: string;
    year: Date;
    semesterCode: string;
    duration: TDuration
    status: TSemesterStatus
    deadline: Date;

}