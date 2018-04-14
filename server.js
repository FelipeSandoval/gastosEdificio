const app = require('./app')
const port = process.env.PORT || 3000

var UserController = require('./models/User');

const server = app.listen(port, function () {
    console.log('Express server listening on port ' + port)
});