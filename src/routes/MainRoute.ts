import path from 'path';
import { Router, Request, Response } from "express";
import MainController from '../controllers/MainController';

const MainRouter = Router();

MainRouter.get('/', MainController.renderMainPage);

export default MainRouter;