import { Router } from "express";
import { academicFacultyController } from "./academicFaculty.controller";

const {createdAcademicFaculty} = academicFacultyController;

const router = Router()


router.route("/create-academicFaculty").post(createdAcademicFaculty)


export const AcademicFacultyRouter = router;