import { Router, } from 'express';

import UsersControllers from './controllers/UsersControllers';


const Routes = Router();

//MVC = Model, Views, Controllers

//index, show, update, create

Routes.get('/users', UsersControllers.index);
Routes.post('/users', UsersControllers.create);
Routes.post('/users/login', UsersControllers.show);



export default Routes;