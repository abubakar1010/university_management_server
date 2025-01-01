import { Types } from "mongoose";

export type TCourse = {
    courseName: string;
    courseTitle: string;
    prefix: string;
    code: number;
    prerequisite: Types.ObjectId[];
}