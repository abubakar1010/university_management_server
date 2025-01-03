import { Router } from "express";
import { academicDepartmentController } from "./academicFaculty.controller";

const {createdAcademicDepartment} = academicDepartmentController;

const router = Router()


router.route("/create-academicDepartment").post(createdAcademicDepartment)


export const AcademicDepartmentRouter = router;