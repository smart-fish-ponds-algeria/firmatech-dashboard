import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

const MONGO_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tlsAllowInvalidCertificates: true, // Disable SSL certificate validation (unsafe for production)
  tls: true, // Explicitly enable SSL
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Declare a global type for the Node.js environment to handle HMR in development
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to persist the MongoClient instance
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGO_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, do not use a global variable
  client = new MongoClient(MONGO_URI, options);
  clientPromise = client.connect();
}

export default clientPromise;