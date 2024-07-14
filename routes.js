'use strict';

const prependLocaleToPath = process.env.PREPEND_LOCALE_TO_PATH === 'true';
const prependSiteIdToPath = process.env.PREPEND_SITEID_TO_PATH === 'true';

const routes = [
  { path: '/login' },
  { path: '/registration' },
  { path: '/reset-password' },
  { path: '/account' },
  { path: '/account/orders' },
  { path: '/account/orders/:orderNo' },
  { path: '/account/wishlist' },
  { path: '/product/:productId' },
  { path: '/search' },
  { path: '/category/:categoryId' }, 
  { path: '/cart' },
  { path: '/s/sfcc-race-composable/cart' },
  { path: '/s/sfcc-race-composable/checkout' },
  { path: '/mobify/bundle/development/' },
  { path: '/worker.js' },
  { path: '/carrito' },    
  { path: '/checkout' } 
];

const PWA_ROUTES = [
  {
    path: '/',
    exact: true
  }, 
  {
    path: '/callback'
  }
];

// add :locale and :siteId path to routes (RefArch/en-US)
const prependPath = [];
if (prependSiteIdToPath) {
 // prependPath.push('sfcc-race-composable');
  prependPath.push('Soriana');
}
if (prependLocaleToPath) {
  PWA_ROUTES.push({
    path: '/en-US',
    exact: true
  });
  prependPath.push('en-US');
}
if (prependPath.length) {
  PWA_ROUTES.push({
    path: `/${prependPath.join('/')}`,
    exact: true
  });
}

for (let i = 0; i < routes.length; i++) {
  let route = routes[i];
  PWA_ROUTES.push(route);

  // add :locale and :siteId path to routes
  if (prependPath.length) {
    PWA_ROUTES.push({ path: `/${prependPath.join('/')}${route.path}` });
  }
}

module.exports = PWA_ROUTES;
