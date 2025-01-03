import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import user from './routes/user.js';
import authentication from './routes/authentication.js';
import payment from './routes/payment.js';
import cors from 'cors';
import Rating from './routes/rating.js';
import { Server } from 'socket.io';

const app = express();
dotenv.config();

const port = process.env.PORT || '800';

// DB Connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.db2);
        console.log('MongoDB has connected successfully');
    } catch (error) {
        console.error("Failed to connect to MongoDB");
    }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

// Routes
app.use('/user', user);
app.use('/payments', payment);
app.use('/auth', authentication);
app.use('/rating', Rating);

// Start the server
const server = app.listen(port, () => {
    connect();
    console.log(`Server is running at http://localhost:${port}`);
});

// Set up Socket.IO
const io = new Server(server); // Use the server object directly here

// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle incoming messages from users
    socket.on('sendMessage', (messageData) => {
        // Emit message to the specified receiver
        io.to(messageData.receiverId).emit('receiveMessage', messageData);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
