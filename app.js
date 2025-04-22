import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import authRoute from "./routers/auth.router.js";
import userRoute from "./routers/user.route.js";
import { rateLimit } from "express-rate-limit";
import DataBase from "../Auth-mern/config/db.js";

DataBase();

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    limit: 100, // Limit each IP to 100 requests per minute
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(limiter);

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

app.all("*", (req, res, next) => {
    const err = new Error("Page not found");
    err.statusCode = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
});

export default app;