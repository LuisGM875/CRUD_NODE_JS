import {
    Router
} from 'express';

const router = Router();
import { getHello } from '../controller/hello.controller.js';

router.get('/hello', getHello)

export default router;