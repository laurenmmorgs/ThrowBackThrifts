const ItemController = require('../controllers/item.controller');
const multer = require('multer');
const express = require('express');
const router = express.Router();

// this stores the image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });



module.exports = (app) => {
    app.get('/api', ItemController.index);
    app.get('/api/allItems', ItemController.findAllItems);
    app.post('/api/newItem',ItemController.createItem); 
    app.get('/api/:id', ItemController.findOneItem);
    app.put('/api/edit/:id', ItemController.updateOneItem)
    app.delete('/api/delete/:id', ItemController.deleteItem);

}

