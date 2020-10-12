export const setConfig = app => {
    const bodyParser = require("body-parser");
    const exphbs = require("express-handlebars");
    const morgan = require("morgan");
    const uuid = require("node-uuid");
    const { morganOpts } = require("./morgan");

    const env = process.env.NODE_ENV;
    const assignId = (req, res, next) => {
        req.id = uuid.v4();
        next();
    };

    morgan.token("id", req => req.id);

    app.engine("handlebars", exphbs());
    app.set("view engine", "handlebars");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(assignId);
    app.use(morgan("[:id] :date[iso] :method :url [:status]", { ...morganOpts }));
    app.use((req, res, next) => {
        if (req.method === "POST") {
            const { id, method, status, body, url } = req;
            const { statusCode } = res;

            console.log(
                `[${id}] ${new Date().toISOString()} ${method} ${url} [${statusCode}]`,
            );

            if (env === "production") {
                console.log(`[${id}] Request body : ${JSON.stringify(body)}`);
            } else {
                console.log(`[${id}] Request body : ${JSON.stringify(body, null, 4)}`);
            }

            return next();
        }
        return next();
    });
};
