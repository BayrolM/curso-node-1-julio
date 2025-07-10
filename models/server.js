import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuarios.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // middlewares
    this.middlewares();

    // rutas de mi app
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Parse JSON bodies
    this.app.use(express.json());

    // Directory to serve static files
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usuariosPath, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default Server;
