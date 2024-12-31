import { Router } from "express";
import { StudentRoute } from "../app/modules/student/student.route";
import { UserRoute } from "../app/modules/user/user.route";

const router = Router({strict: true, caseSensitive: true, mergeParams: true})

const routeInfo = [
    {
        path: "/student",
        route: StudentRoute
    },
    {
        path: "/user",
        route: UserRoute
    },
]


routeInfo.forEach( item => router.use(item.path, item.route))


export const rootRoute = router