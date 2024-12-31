class ApiError extends Error {
	success: boolean;
    statusCode: number;
	message: string;
	path: string;
	type: string;
	error: Record<string, unknown>[];
	stack: string | undefined;
	constructor(
		statusCode: number,
		message: string,
		path: string = "",
		type: string = "unknownError",
		success: boolean = false,
		error: [Record<string, unknown>] = [{}],
		stack: string = ""
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
