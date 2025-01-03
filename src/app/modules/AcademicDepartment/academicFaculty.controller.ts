import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { academicDepartmentService } from "./academicDepartment.service";


const createdAcademicDepartment = asyncHandler(async (req, res) => {
	const academicDepartmentData = req.body;

	const newAcademicDepartment =
		await academicDepartmentService.createAcademicDepartmentService(
			academicDepartmentData
		);

	if (!newAcademicDepartment)
		throw new ApiError(404, "Academic Department not found");

	res.status(201).json(
		new ApiResponse(
			201,
			"Academic Department Successfully created",
			newAcademicDepartment
		)
	);
});

export const academicDepartmentController = {
	createdAcademicDepartment,
};
