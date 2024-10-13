import { Router } from 'express';
import { createCard } from '../../controllers/cards/cards.controller';

const cardsRouter: Router = Router();

cardsRouter.post('/', createCard);

export default cardsRouter;
