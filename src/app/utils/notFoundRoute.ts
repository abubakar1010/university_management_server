import { RequestHandler } from "express"
import ApiError from "./ApiError"

export const notFoundRoute:RequestHandler = (req) => {
 throw new ApiError(404, `'${req.originalUrl}' route not defined. Please check the route you are trying to access`,req.originalUrl,"not found")

}