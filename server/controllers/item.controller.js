const { model } = require('mongoose');
const Item = require('../models/item.model');    /* this is new */


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createItem = (request, response) => {
    // Mongoose's "create" method is run using our Item model to add a new Item to our db's Item collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Item.create(request.body) //This will use whatever the body of the client's request sends over
        .then(Item => response.json(Item))
        .catch(err => response.status(400).json(err));
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