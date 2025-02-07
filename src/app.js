import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from './routes/auth.routes.js';
import docenteRoutes from './routes/docente.routes.js';
import empleadoRoutes from './routes/trabajador.routes.js';

const app = express();

const whitelist = [
    "http://localhost:5173",
    "https://asistencia-front.vercel.app"
  ];
  
  const corsOptions = {
    origin: function (origin , callback ) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", authRoutes);
app.use("/api", docenteRoutes);
app.use("/api", empleadoRoutes);


export default app;