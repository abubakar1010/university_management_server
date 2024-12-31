import { RequestHandler } from "express";

const asyncHandler = (requestHandler: RequestHandler) => {
	const handlePromise: RequestHandler = (req, res, next) => {
		Promise.resolve(requestHandler(req, res, next)).catch((error) =>
			next(error)
		);
	};

	return handlePromise;
};

export default asyncHandler;
