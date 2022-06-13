import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    sqlite3: {
        client: 'better-sqlite3',
        connection: { filename: path.resolve(__dirname, '../db/ecommerce.db3') },
        useNullAsDefault: true
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'products'
        }
    },
    mongodb: {
        url: process.env.MONGODB_URL
    },
    fileName: {
        messages: path.resolve(__dirname, '../data/messages.txt')
    },
    firebase: {
        privateKey: path.resolve(__dirname, '../private/clase26-26f5c-firebase-adminsdk-9z6sm-27f3c2c4c9.json')
    },
    facebook: {
        clientID: process.env.FB_CLIENTID,
        clientSecret: process.env.FB_SECRETKEY,
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },
    jwt: {
        privateKey: process.env.JWT_PRIVATEKEY
    }
}

export default config;