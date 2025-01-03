import ApiError from "../../utils/ApiError";
import { AcademicDepartment } from "./academicDepartment.model";
import { TAcademicDepartment } from "./academicDepartment.interface";

const createAcademicDepartmentService = async (
	academicDepartmentData: Partial<TAcademicDepartment>
) => {
	const { departmentName } = academicDepartmentData;

	const academicDepartment = await AcademicDepartment.findOne({departmentName});

	if (academicDepartment)
		throw new ApiError(409, "This academic department is already exist");

	const newAcademicDepartment = new AcademicDepartment(academicDepartmentData);

	await newAcademicDepartment.save();

	const createdAcademicDepartment = await AcademicDepartment.findOne({
		departmentName: newAcademicDepartment.departmentName
	});

	if (!createdAcademicDepartment)
		throw new ApiError(500, "Failed to create Academic department");

	return createdAcademicDepartment;
};

export const academicDepartmentService = {
	createAcademicDepartmentService,
};
