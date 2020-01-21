import Express from 'express';
import {PORT} from './server/configuration/configuration';
import ShowRoutes from './server/routes/ShowRoutes';
import bodyParser from 'body-parser';
import UserRoutes from './server/routes/UserRoutes';
import {initialize} from './server/repositories/UserRepository';

global.DIR = __dirname;

initialize();

const API = Express();

API.use(bodyParser.json());

ShowRoutes(API);
UserRoutes(API);

API.listen(PORT, () => console.log(`API Started... on port [${PORT}]`));



