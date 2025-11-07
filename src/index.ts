import 'reflect-metadata'
import express, { Request, Response } from 'express';
import { router } from './routes';
import { AppDataSource } from './database';

const server = express();

(async () => {
    try {
        await AppDataSource.initialize()
        console.log("Data Source Inicializado!")
    } catch (error) {
        console.error("Error during Data Source initialization", error)
    }
 server.use(express.json())
    server.use(router)
    server.listen(5000, () => console.log('Server on'))
})();


