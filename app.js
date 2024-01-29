import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;
        this.paths = {};

        // Configure environment variables
        dotenv.config();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    // async conectarDB() {
    //     await dbConnection();
    // }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Parse incoming JSON requests
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        // Define your routes here
        // this.app.use(this.paths.auth, require('../routes/auth'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

const server = new Server();
server.listen();