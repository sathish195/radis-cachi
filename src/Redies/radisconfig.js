const { createClient } = require("redis");

const client = createClient({
  //   password: "0MhOq0kqh2b4XEVB4Co8yNAgS1uJY6fy",

  //   url: "redis://redis-12490.c322.us-east-1-2.ec2.cloud.redislabs.com:12490",
  host: "127.0.0.1", // Redis server address
  port: 6379, // Redis server port
});
client.on("connect", () => {
  console.log("Redis Client Connected");
});
client.on("error", (err) => console.log("Redis Client Connection Error", err));
client.connect();
module.exports = client;
