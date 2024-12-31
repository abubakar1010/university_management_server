class ApiResponse<T> {
	statusCode: number;
	message: string;
	success: boolean;
	type?: string;
	data:T;
	constructor(
		statusCode: number,
		message: string,
        data: T,
		success: boolean = true,
	) {
		this.success = success;
		this.statusCode = statusCode;
		this.message = message;
        this.data = data;

	}
}

export default ApiResponse;
