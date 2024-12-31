import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { userService } from "./user.service";

const createUser = asyncHandler(async(req, res) => {
    const data = req.body;

    const newUser = await userService.registerService(data)

    if(!newUser) throw new ApiError(500, "User creation failed")

        res.status(201).json(new ApiResponse(201, "User is successfully created", newUser))
})


export const userController = {
    createUser
}