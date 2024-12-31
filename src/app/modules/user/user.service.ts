import ApiError from "../../utils/ApiError";
import { TUser } from "./user.interface";
import User from "./user.model";

const registerService = async (userData: TUser) => {
	const filter = {
		username: userData.username,
		email: userData.email,
		userid: userData.userid,
	};

	const user = await User.findOne(filter);

	if (user) throw new ApiError(403, "User already exist");

	const newUser = new User(userData);

    await newUser.save()

    if(!newUser) throw new ApiError(500, "Something went wrong while create user")

	return newUser;
};

export const userService = {
    registerService
}