import { Types } from "mongoose";
import { TAddress, TFullName, TGender } from "../../types";

export type TFaculty = {
    userid: string;
    user: Types.ObjectId;
    fullname: TFullName;
    dateOfBirth: Date;
    gender: TGender;
    contact: string[];
    emergencyContact: string;
    address: TAddress;
    avatar: string;
    
};
