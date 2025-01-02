import ApiError from "../../utils/ApiError";
import { TLoginCredential, TUser } from "./user.interface";
import User from "./user.model";

const registerService = async (userData: TUser) => {
	const filter = {
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

const loginUser = async(loginCredential: TLoginCredential) => {

    const user = User.findOne({
        $and:[
            {userid: loginCredential.userid},
            {password: loginCredential.password}
        ]
    })

    if(!user) throw new ApiError(404, "User is not exist")

        
}

export const userService = {
    registerService,
    loginUser
}