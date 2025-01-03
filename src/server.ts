import mongoose from 'mongoose'
import { config } from './app/config';
import app from './app';

const port = config.port ?? 8000;
const uri = config.db_uri as string;

(async function main(){
    
    try {
        const connectionInstance = await mongoose.connect(uri)
        console.log(`server connected! host-- ${connectionInstance.connection.host}`)
        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })
    } catch (error) {
        console.log("Oops! Connection failed", error)
    }
})();