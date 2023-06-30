const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index.js');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const User = require('./models/user.js');
const CraftingRecipe = require('./models/craftingRecipe.js');

const app = express();
const PORT = process.env.PORT || 8080;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
