import express, {Application} from "express";
import PostRoute from './routes/posts'
import UserRoute from './routes/users'

export class App{
    private app: Application;
    private port: number;

    constructor(p: number){
        this.app = express();
        this.port = p;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
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