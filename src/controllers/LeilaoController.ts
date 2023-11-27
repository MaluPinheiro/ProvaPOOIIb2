import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.produto !== "" && dados.preco != null){
            const newleilao = await LeilaoServices.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLeilao(req: Request, res: Response){
        const leiloes = LeilaoServices.listLeilao()

        res.render('home', {leiloes: leiloes})
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update leilao');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Delete leilao');
    }
}

export default new LeilaoController()