import mongoose from "mongoose"

export const validateObjectId = (objectId: string) => {
    return mongoose.Types.ObjectId.isValid(objectId)
}