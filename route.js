import { Router } from "express";
import { body, param } from "express-validator";

import Controller from "./controller.js";



const routes = Router({ strict:true})

routes.get('/getpost', Controller.getposts);

export default routes;