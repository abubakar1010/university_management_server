import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
	userid: {
		type: String,
		required: true,
        trim: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
        trim: true,
		validate: {
			validator: function (email) {
				return /^[a-z0-9\\._%+!$&*=^|~#%'`?{}/\\-]+@([a-z0-9\\-]+\\.){1,}([a-z]{2,16})$/.test(
					email
				);
			},
			message: (props) => `${props.value} is not valid email`,
		},
	},
	password: {
		type: String,
		required: [true, "password is required"],
        trim: true,
        minlength: [8, "Password must be at least 8 character long"],
		validate: {
			validator: function (password) {
				const regex =
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

				return regex.test(password);
			},
			message: (props) =>
				`${props.value} does not meet the required criteria.Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters."`,
		},
	},
	role: {
		type: String,
		enum: {
            values: ["STUDENT", "FACULTY", "ADMIN"],
            message: '{VALUE} is not supported'
        },
		required: true,
	},
	status: {
		type: String,
		enum: {
            values: ["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"],
            message: "{VALUE} is not supported"
        },
		default: "PENDING",

		required: true,
	},
	lastPasswordChange: {
		type: Date,
        default: Date.now()
	},
});

const User = model<TUser>("User", userSchema);

export default User;
