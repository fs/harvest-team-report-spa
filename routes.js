const nextRoutes = require('next-routes');

module.exports = nextRoutes().add({ name: 'home', pattern: '/', page: 'index' });
