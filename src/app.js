import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from './routes/auth.routes.js';
import docenteRoutes from './routes/docente.routes.js';
import empleadoRoutes from './routes/trabajador.routes.js';

const app = express();

app.use(cors({
    origin: 'https://asistencia-front.vercel.app', // Especifica el origen
    credentials: true, // Permitir credenciales
    methods: "PUT, POST, GET, DELETE, PATCH, OPTIONS",
    allowedHeaders: "content-type"
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api", authRoutes);
app.use("/api", docenteRoutes);
app.use("/api", empleadoRoutes);


export default app;