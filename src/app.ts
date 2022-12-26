import express , { Express , NextFunction , Request , Response, Application } from "express";

import PostRoute from './routes/posts'
import UserRoute from './routes/users'
import path from "path"; 



export class App{
    private app: Application;
    private port: number;

    constructor(p: number){
        this.app = express();
        this.port = p;
        this.funcionalitys();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
    }

    funcionalitys(){
        this.app.use("/",express.static(path.join( __dirname , "../../my-app")));
        this.app.use(function (inRequest: Request , inResponse: Response ,inNext: NextFunction ){
            inResponse.header ("Access-Control-Allow-Origin", "*");
            inResponse.header ("Access-Control-Allow-Methods","GET,POST,DELETE,OPTIONS ");
            inResponse.header ("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
            inNext();
        });
    }

    routes(){
        this.app.use('/posts', PostRoute);
        this.app.use('/users', UserRoute);
    }


    async listen(){
        await this.app.listen(this.port);
        console.log('Server na porta',this.port);
    }

}