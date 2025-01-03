import { Router } from "express";
import { StudentRoute } from "../app/modules/Student/student.route";
import { UserRoute } from "../app/modules/User/user.route";
import { AcademicFacultyRouter } from "../app/modules/AcademicFaculty/academicFaculty.route";
import { AcademicDepartmentRouter } from "../app/modules/AcademicDepartment/academicDepartment.route";

// const router = Router({strict: true, caseSensitive: true, mergeParams: true})
const router = Router()

const routeInfo = [
    {
        path: "/student",
        route: StudentRoute
    },
    {
        path: "/user",
        route: UserRoute
    },
    {
        path: "/academicFaculty",
        route: AcademicFacultyRouter
    },
    {
        path: "/academicDepartment",
        route: AcademicDepartmentRouter
    },
]


routeInfo.forEach( item => router.use(item.path, item.route))


export const rootRoute = router