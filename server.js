const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers/index.js');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const itemImageMap = require('./image-uploader/itemImageMap.js');
const {OAuth2Client} = require('google-auth-library');
const cookieParser = require('cookie-parser');
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);


const app = express();
const PORT = process.env.PORT || 8080;


// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


// Conditional operators for handlebars
hbs.handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
  switch (operator) {
      case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
      case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
          return options.inverse(this);
  }
});

// Inform Express.js which template engine we're using
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./controllers/api/loginRoutes'));
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
});

// Display the image of the item that the user chooses
app.post('api/crafting-recipes/search', (req,res) => {
  const selectedItem = req.body.item;
  const imageURL = itemImageMap[selectedItem];

  res.render('searchResults', { imageURL });
});

app.post('/login', (req,res) => {
  let token = req.body.token;

  async function verify() {
    const ticket = await client.verfiyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
  }
  verify()
  .then(() => {
    res.cookie('session-token', token);
    res.send('success')
  })
  .catch(console.error);
});

app.get('/profile', checkAuthenticated, (req, res)=>{
  let user = req.user;
  res.render('profile', {user});
})

app.get('/protectedRoute', checkAuthenticated, (req,res)=>{
  res.send('This route is protected')
})

app.get('/logout', (req, res)=>{
  res.clearCookie('session-token');
  res.redirect('/login')

})

function checkAuthenticated(req, res, next) {
  let token = req.cookies['session-token'];

  let user = {};
  async function verfiy() {
    const ticket = await client.verfiyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    user.name = payload.name;
    user.email = payload.email;
    user.picture = payload.picture;
  }
  verify()
  .then(()=>{
      req.user = user;
      next();
  })
  .catch(err=>{
      res.redirect('/login')
  })

};

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:8080/'));
});
