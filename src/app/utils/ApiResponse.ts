class ApiResponse {
	success: boolean;
	statusCode: number;
	message: string;
	type?: string;
	data: Record<string, unknown>[];
	constructor(
		success: boolean = true,
		statusCode: number,
		message: string,
        data: Record<string, unknown>[] =[{}],
	) {
		this.success = success;
		this.statusCode = statusCode;
		this.message = message;
        this.data = data;

	}
}

export default ApiResponse;
