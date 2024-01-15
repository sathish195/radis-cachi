// const Redis = require("ioredis");
const axios = require("axios");
const express = require("express");
const routes = express.Router();
const  redismodule = require('../Redies/redis')

// const { createClient } = require("redis");

// const client = createClient({
// //   password: "0MhOq0kqh2b4XEVB4Co8yNAgS1uJY6fy",

// //   url: "redis://redis-12490.c322.us-east-1-2.ec2.cloud.redislabs.com:12490",
// host: '127.0.0.1', // Redis server address
//      port: 6379, 
// });
// client.on("connect", () => {
//   console.log("Redis Client Connected");
// });
// client.on("error", (err) => console.log("Redis Client Connection Error", err));
// client.connect();

const url = "https://fakestoreapi.com/products";
routes.get("/", async (req, res) => {

    let isCashed = false;

    const productCashing = await redismodule.get("products");

    if (productCashing) {
      isCashed = true;
      res.send({ isCashed, data: JSON.parse(productCashing) });
    } else {
      const apiResponse = await axios.get(url);

      const data = await apiResponse.data;

      if (data?.length === 0) {
        res.send({ message: "api returnd an empty arry" });
      }

      await redismodule.set("products", JSON.stringify(data));

      res.send({ isCashed, data });
    }

});

module.exports = routes;