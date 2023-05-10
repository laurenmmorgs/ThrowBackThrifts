const UserController = require('../controllers/userController')

module.exports = app => {
    app.post('/api/reg', UserController.registerUser)
   //  app.post('/api/login', UserController.loginUser)
   //  app.post('/api/logout', UserController.logout)
}