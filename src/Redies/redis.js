// modules/redisModule.js
// const redis = require('redis');
const client = require('./radisconfig');

// Set a key-value pair in Redis
const setValue = (key, value) => {
  client.set(key, JSON.stringify(value), (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Set ${key} in Redis: ${reply}`);
    }
  });
};

// Get the value of a key from Redis
// const getValue = (key, callback) => {
//   client.get(key, (err, data) => {
//     if (err) {
//       console.error(err);
//       callback(err, null);
//     } else {
//       const parsedData = JSON.parse(data);
//       callback(null, parsedData);
//     }
//   });
// };

// Set a field in a hash in Redis
const setHashField = (hashKey, field, value) => {
  client.hset(hashKey, field, JSON.stringify(value), (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Set field ${field} in hash ${hashKey} in Redis: ${reply}`);
    }
  });
};

// Get a field from a hash in Redis
const getHashField = (hashKey, field, callback) => {
  client.hget(hashKey, field, (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      const parsedData = JSON.parse(data);
      callback(null, parsedData);
    }
  });
};

// Check if a key exists in Redis
const keyExists = (key, callback) => {
  client.exists(key, (err, reply) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, reply === 1);
    }
  });
};

module.exports = {
  setValue,
//   getValue,
  setHashField,
  getHashField,
  keyExists,
};
