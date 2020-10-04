import mongoose from 'mongoose';
import { IMongooseConnection } from './interfaces';

class MongooseConnection implements IMongooseConnection {
    schema
    URI

    constructor(schema, URI) {
        this.schema = schema;
        this.URI = URI;
    }

    private connectToDatabase = (URI) => {
        mongoose.connect(URI, {useNewUrlParser: true});
    }

    private createSchema = (schema) => {
        const { Schema } = mongoose;
        const mongooseSchema = new Schema(schema);
    }
}

export default MongooseConnection;