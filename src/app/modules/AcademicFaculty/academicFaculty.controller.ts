import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { academicFacultyService } from "./academicFaculty.service";

const createdAcademicFaculty = asyncHandler(async (req, res) => {
	const academicFacultyData = req.body;

	const newAcademicFaculty =
		await academicFacultyService.createAcademicFacultyService(
			academicFacultyData
		);

	if (!newAcademicFaculty)
		throw new ApiError(404, "Academic faculty not found");

	res.status(201).json(
		new ApiResponse(
			201,
			"Academic Faculty Successfully created",
			newAcademicFaculty
		)
	);
});

export const academicFacultyController = {
	createdAcademicFaculty,
};
