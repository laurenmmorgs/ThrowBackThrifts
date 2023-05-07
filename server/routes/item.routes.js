const ItemController = require('../controllers/item.controller');

// const multer = require('multer');
// const config = require('../config');


module.exports = (app) => {
    app.get('/api', ItemController.index);
    app.get('/api/allItems', ItemController.findAllItems);
    app.post('/api/newItem', ItemController.createItem); 
    app.get('/api/:id', ItemController.findOneItem);
    app.put('/api/edit/:id', ItemController.updateOneItem)
    app.delete('/api/delete/:id', ItemController.deleteItem);
}


