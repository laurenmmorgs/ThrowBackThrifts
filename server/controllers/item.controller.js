const { model } = require('mongoose');
const Item = require('../models/item.model');    /* this is new */
// const Image = require('../models/image.model')
const multer = require('multer');
const fs = require('fs');

    ///this sets the storage folder inside the client public folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
//making sure that they are the correct type of file 
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG are allowed!'), false);
    }
};
//ensures that the upload is uploaded to storage with file sizes
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;


//creates an item with the photos 
module.exports.createItem = (request, response) => {
    upload.single('itemImage')(request, response, (err) => {
        if (err) {
            return response.status(400).json({ error: err.message });
        }
        console.log(request.file)
  
        // console.log(request.body)
        const newItem = new Item({
            itemName: request.body.itemName,
            price: request.body.price,
            itemSize: request.body.itemSize,
            category: request.body.category,
            description: request.body.description,
            itemImage: request.file ? request.file.path : null // checks if file exists before accessing path
        });

        newItem.save()
            .then((item) => {
                response.status(201).json({ item });
            })
            .catch((error) => {
                response.status(400).json({ error });
            });
    });
};
  
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}


module.exports.findAllItems = (req, res) => {
    Item.find()
        .then((allDaItems) => {
            res.json({ items: allDaItems })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.findOneItem = (req, res) => {
    Item.findOne({_id: req.params.id})
        .then((oneItem) => {
            res.json({ item: oneItem })  // whatever we name it gets called to the front end so Item for example 
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateOneItem = (request, response) => {
    Item.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedItem => response.json({item: updatedItem}))
        .catch(err => response.json(err))
}

module.exports.deleteItem = (request, response) => {
    Item.deleteOne({_id: request.params.id})
        .then(deleteOneItem => response.json(deleteOneItem))
        .catch(err => response.json(err))

}

