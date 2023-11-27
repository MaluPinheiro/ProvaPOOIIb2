import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../services/LanceServices";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.valor !== null){
            const newlance = await LanceServices.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLances(req: Request, res: Response){
        const lances = LanceServices.listLance()

        res.render('home', {lances: lances})
    }

    async updateLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}

export default new LanceController()