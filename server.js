const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 81;

const cors_proxy = require('./lib/cors-anywhere');
cors_proxy.createServer({
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: [
        'x-request-start',
        'x-request-id',
        'via',
        'connect-time',
        'total-route-time',
    ],
    redirectSameOrigin: true,
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
