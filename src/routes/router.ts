import { Router } from 'express';
import cardsRouter from './cards/cards.router';
import authRouter from './auth/auth.router';

const router: Router = Router();

router.use('/auth', authRouter);

router.use('/cards', cardsRouter);

export default router;
