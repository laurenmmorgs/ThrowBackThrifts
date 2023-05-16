const UserController = require('../controllers/userController')

module.exports = app => {
    app.post('/api/register', UserController.registerUser);
    app.get('/api/index', UserController.index);
    app.post('/api/login', UserController.loginUser);
    app.post('/api/logout', UserController.logout)
}