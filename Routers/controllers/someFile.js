// const express = require("express")
// const { someFunc, anotherFunc } = require("./../controllers/someFile.js")
// const someRouter = express.Router()
const userModel = require("./../../db/models/userSchema")


const createUser = (req, res) =>{
    const { someKey, someNumber } = req.body;
    
      const newSomeData = new someModel({
        someKey, 
        someNumber 
      });
    
      newSomeData 
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }


    const anotherFunc = (req, res) => {
        someModel
          .find({})
          .then((result) => {
            res.send(result);
          } )
          .catch((err) => {
            res.send(err);
          });
        }



        module.exports= { someFunc, anotherFunc }