const { Genre, validate } = require("../models/db/genere");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../midilewares/auth");
const admin = require("../midilewares/admin");
const redismodule = require("../Redies/redis");
const client = require('../Redies/radisconfig')


// router.get("/me", async (req, res) => {
//   const genres = await Genre.find().sort("-name");
//   res.send(genres);
// });
router.get("/",async (req, res) => {
  const key = "genre";

  // Get data from Redis
  // const redisData = redismodule.getValue(key);
  const exists =await client.exists(key)
  if(exists){
  const redisData =await client.get(key);


    res.send(redisData);
  } 
  else {
    // If data is not in Redis, fetch from MongoDB
    const genres = await Genre.find();

    if (genres.length === 0) {
      res.send({ message: "No genres found" });
    } else {
      // Save data to Redis for caching
      client .set
      (key, genres);

      res.send("data");
    }
  }
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let genre = new Genre({ name: req.body.name });
  const key = "genre";
  const value = req.body.name;

  // Set data in Redis
  redismodule.setValue(key, value);

  genre = await genre.save();

  res.send(genre);
});

// update Route

router.put("/update/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  const response = await Genre.findByIdAndUpdate(
    
    { _id: req.params.id },
    { $set: { name: req.body.name } },
    { new: true } // Use { new: true } to return the updated document
  );

  if (!response) {
    return res.status(400).send("The genre with the given id was not found");
  }

  // No need to call save() after using findByIdAndUpdate, as it updates and returns the updated document directly

  return res.send({ message: "Update successful", response });
});

// delete

router.delete("/:id", [auth, admin], async (req, res) => {
  const genre = await Genre.deleteOne({ _id: req.params.id });

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
});

module.exports = router;