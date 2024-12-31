/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import ApiError from "../utils/ApiError";

const globalErrorHandler:ErrorRequestHandler = (err,req, res, next) => {

    if(err instanceof ApiError){
        res.status(err.statusCode).json({
            success: err.success,
            statusCode: err.statusCode,
            message: err.message,
            path: err.path,
            type: err.type,
            error: err.error,
            stack: err.stack,
            timestamp: new Date().toISOString(),
        });
    }else {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: "An unexpected error occurred.",
            error: err,
            stack: err.stack,
            timestamp: new Date().toISOString(),
        });
    }

}

export default globalErrorHandler