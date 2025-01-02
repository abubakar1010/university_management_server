import ApiError from "../../utils/ApiError";
import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicFacultyService = async (
	academicFacultyData: Partial<TAcademicFaculty>
) => {
	const { academicFacultyName } = academicFacultyData;

	const academicFaculty = await AcademicFaculty.findOne(academicFacultyData);

	if (academicFaculty)
		throw new ApiError(409, "This academic faculty is already exist");

	const newAcademicFaculty = new AcademicFaculty(academicFacultyData);

	await newAcademicFaculty.save();

	const createdAcademicFaculty = await AcademicFaculty.findOne({
		academicFacultyName,
	});

	if (!createdAcademicFaculty)
		throw new ApiError(500, "Failed to create course");

	return createdAcademicFaculty;
};

export const academicFacultyService = {
	createAcademicFacultyService,
};
