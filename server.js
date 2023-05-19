const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const exphbs = require("express-handlebars");
const dateHelpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const hbs = exphbs.create({
  defaultLayout: "main",
  helpers: {
    ...helpers,
    ...dateHelpers,
  },
  partialsDir: ["views/partials/"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on port http://localhost:${PORT}`)
  );
});
