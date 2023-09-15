import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchemaMiddleware } from "../middleware/validateSchema";
import musicSchema from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMiddleware(musicSchema), musicController.createMusic);

export default musicRouter;