const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index.js');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const itemImageMap = require('./image-uploader/itemImageMap.js');

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

// Display the image of the item that the user chooses
app.post('api/crafting-recipes/search', (req,res) => {
  const selectedItem = req.body.item;
  const imageURL = itemImageMap[selectedItem];

  res.render('searchResults', { imageURL });
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:8080/'));
});
