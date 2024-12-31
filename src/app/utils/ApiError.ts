class ApiError extends Error {
	success: boolean;
	statusCode: number;
	message: string;
	path: string;
	type?: string;
	error: Record<string, unknown>[];
	stack: string | undefined;
	constructor(
		success: boolean,
		statusCode: number,
		message: string,
		path: string,
		type: string = "unknownError",
		error: [Record<string, unknown>] = [{}],
		stack?: string | undefined
	) {
		super(message);
		this.success = success;
		this.statusCode = statusCode;
		this.message = message;
		this.path = path;
		this.type = type;
		this.error = error;

		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export default ApiError;
