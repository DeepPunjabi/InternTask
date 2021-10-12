const express = require('express');
const route = express.Router();
const services = require("../services/render"); 
const controller = require("../controller/controller")

route.get('/',services.homeRoutes);


route.post("/author",controller.create); 
route.post("/book",controller.createBook); 
route.get("/author",controller.find);
route.get("/book",controller.findBook);

route.get("/author/:id",controller.getauthor);
route.get("/book/:id",controller.getbook);

route.put("/author/:id",controller.update);
route.put("/book/:id",controller.updateBook);

route.delete("/author/:id",controller.delete);
route.delete("/book/:id",controller.deleteBook);

module.exports=route;