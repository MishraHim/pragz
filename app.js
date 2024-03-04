import express from "express";

import routes from "./route.js";

const app =  express();
const PORT  = 3000;
app.use(express.json());
app.use(routes);

app.use((req,res,err,next) => {
    err.statusCode = err.statusCode||500;
    err.message  = err.message || "Internal server error";
    res.status(err.statusCode).json({
        message:err.message
    });
});


app.listen(PORT, ()=>console.log(`Server is running on post ${PORT}`));