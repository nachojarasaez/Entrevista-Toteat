import { Router } from 'express';
import createWaiter from './post/createWaiter'



const appRouter: any = Router();


//Get Methods



//Post Methods


appRouter.post('/createWaiter', createWaiter);


//Patch Methods



export default appRouter;
