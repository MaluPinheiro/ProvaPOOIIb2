import LanceController from "../controllers/LanceController";
import { Router } from "express";

const LanceRouter = Router();

LanceRouter.get('/lances', LanceController.listLances)

LanceRouter.post('/lance', LanceController.createLance);

LanceRouter.put('/lance', LanceController.updateLance);

LanceRouter.delete('/lance', LanceController.deleteLance);

export default LanceRouter;