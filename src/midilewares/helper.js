// const { jwtDecode } = require('jwt-decode'); // Make sure to import the library

// // Uncomment the token variable and provide a valid JWT token
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2YmQzMTJiM2ZiMDBhYzhkMTMzNzIiLCJpYXQiOjE3MDU0NTMwNDcsImV4cCI6MTcwNTQ1NjY0N30.yBp3VW5WQs9XbKEw9FHCGPGKOl030cBoT_PgXpVobjQ";

// const decoded = jwtDecode(token);

// console.log(decoded);

// const parseJwt = (token) => {
//   try {
//     return jwtDecode(token);
//   } catch (e) {
//     return null;
//   }
// };

// const isValidToken = (token) => {
//   if (token == null || token == undefined) {
//     return false;
//   }
//   const decodedToken = parseJwt(token);
//   return decodedToken?.exp * 1000 > Date.now();
// };

// const getIdFromToken = (token) => {
//   if (token == null || token == undefined) {
//     return -1;
//   }
//   const decodedToken = parseJwt(token);
//   console.log(decodedToken);
//   return decodedToken?._id ? decodedToken._id : -1;
// };

// // geting role from token
// //  const getRoleFromHeader = (authHeader)=> {
// //     const token = authHeader && authHeader.split(" ")[1];
// //     return getRoleFromToken(token);
// // }

// // Provide a valid JWT token when calling the functions
// console.log(parseJwt(token));
// console.log(getIdFromToken(token));
// console.log(isValidToken(token));
