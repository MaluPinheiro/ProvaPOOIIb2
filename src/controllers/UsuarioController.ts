import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioServices from "../services/UsuarioServices";

class UsuarioController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newusuario = await UsuarioServices.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newusuario: newusuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const usuarios = UsuarioServices.listUsuarios()

        res.render('home', {usuarios: usuarios})
    }

    async updateUsuario(req: Request, res: Response){
        res.send('Update usuario');
    }

    async deleteUsuario(req: Request, res: Response){
        res.send('Delete usuario');
    }
}

export default new UsuarioController()