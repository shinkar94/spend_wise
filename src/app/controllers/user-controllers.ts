import {NextApiRequest, NextApiResponse} from "next";


class UserControllers {
    async registration(req: Request, res: NextApiResponse){

    }
    async login(req: NextApiRequest, res: NextApiResponse, next: ()=>void){
        try {

        }catch (e) {

        }
    }
    async logout(req: NextApiRequest, res: NextApiResponse, next: ()=>void){
        try {

        }catch (e) {

        }
    }
    async activate(req: NextApiRequest, res: NextApiResponse, next: ()=>void){
        try {

        }catch (e) {

        }
    }
    async refresh(req: NextApiRequest, res: NextApiResponse, next: ()=>void){
        try {

        }catch (e) {

        }
    }
    async getUsers(req: NextApiRequest, res: NextApiResponse, next: ()=>void){
        try {

        }catch (e) {

        }
    }
}

const userControllers = new UserControllers()
export default userControllers