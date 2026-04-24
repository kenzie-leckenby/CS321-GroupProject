import { MongoClient } from 'mongodb';
import { setDefaultResultOrder } from "dns";

setDefaultResultOrder("ipv4first");

const uri = process.env.MONGODB_DIRECTURI!;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;