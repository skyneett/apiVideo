import {Router} from 'express';
import { ping } from '../controllers/index.controller.js';
import { shearch } from '../controllers/index.controller.js';
const router = Router()

router.get('/ping',ping);

router.get('/employes',shearch);


export default router  