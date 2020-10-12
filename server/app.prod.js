import express from'express';
import enforce from 'express-sslify';
import actuator from 'express-actuator';
import { setConfig } from './conf';
import router from './routes';

const app = express();

// ACTUATOR API OPTS
const actuatorOpts = {
    basePath: process.env.BASE_PATH,
    infoGitMode: 'simple'
};

app.enable('trust proxy');

// BASE SERVER CONF
setConfig(app);

// ACTUATOR API
app.use(actuator(actuatorOpts));

// HTTPS
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// ROUTES
app.use(router);



app.listen(Number(process.env.PORT));
