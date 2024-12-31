import { Router } from "express";
import { userController } from "./user.controller";

const {createUser} = userController;


const router = Router();


router.post("/create-user", createUser )

export const UserRoute = router;
