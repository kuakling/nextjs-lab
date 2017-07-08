const UrlPrettifier = require('next-url-prettifier').default;

const formRoute = require('./pages/modules/form/routes').default
const restRoute = require('./pages/modules/rest/routes').default
 
const routes = [
  {
    page: 'index',
    prettyUrl: '/home'
  },
  {
    page: 'about',
    prettyUrl: '/about-us'
  },
  {
    page: 'fetch',
    prettyUrl: '/fetch'
  }
].concat(formRoute, restRoute);


const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;