/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import ApiError from "../utils/ApiError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof ApiError) {
		res.status(err.statusCode).json({
			success: err.success,
			statusCode: err.statusCode,
			message: err.message,
			details: "",
			path: err.path,
			type: err.type,
			error: err.error,
			stack: err.stack,
		});
	} else if (err.name === "ValidationError") {
		res.status(400).json({
			success: false,
			statusCode: 400,
			message: err._message,
			details: err.message,
			path: req.originalUrl,
			type: err.name,
			stack: err.stack,
		});
	} else {
		res.status(500).json({
			success: false,
			statusCode: 500,
			message: "An unexpected error occurred.",
			error: err,
			stack: err.stack,
		});
	}
};

export default globalErrorHandler;
