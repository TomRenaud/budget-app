import express from 'express';
import { setConfig } from './conf';
import router from './routes';

const app = express();

// BASE SERVER CONF
setConfig(app);

// ROUTES
app.use(router);

app.listen(3001);
