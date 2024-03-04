import { validationResult, matchedData } from "express-validator";

import DB from "./database.js";


const validation_result = validationResult.withDefaults({
    formatter: (error) => error.msg
});


class Controller {
    static validation = (Req, res, next) => {
        const error = validation_result(res).mapped();
        if (Object.keys(error).length) {
            return res.status(422).json({
                ok: 0,
                status: 422,
                error
            });
        }
        next();
    }

    // static create = async(req,res,next)=>{
    //     const { title, body, author } = req.body;

    // }

    static getposts = async (req, res) => {
        //   console.log('hi');
        
        let sql = await DB.query("SELECT * FROM posts");
        console.log(sql);
        // return req(getpost);
        res.status(200).json({
            ok: 1,
            status: 200,
            sql,
        });

    }
}
export default Controller;