import Express from 'express';
import {PORT} from './server/configuration/configuration';
import ShowRoutes from './server/routes/ShowRoutes';
import bodyParser from 'body-parser';
import UserRoutes from './server/routes/UserRoutes';
import AuthenticationRoutes from './server/routes/AuthenticationRoutes';
import Authentication from './server/middleware/Authentication';

global.DIR = __dirname;

const API = Express();

API.use(Authentication({
    whitelist: ['/authentication']
}));

API.use(bodyParser.json());

ShowRoutes(API);
UserRoutes(API);
AuthenticationRoutes(API);

API.listen(PORT, () => console.log(`API Started... on port [${PORT}]`));



