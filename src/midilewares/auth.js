const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied. No Token Provided");
  }
  try {
    const decode = jwt.verify(token, "jwtPrivateKey");
    req.user = decode;
    next();
  } catch (error) {
    return res.status(400).send("Invallid Token");
  }
}

module.exports = auth;

// const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   const token = req.header("x-auth-token");
//   if (!token) {
//     return res.status(401).send("Access denied. No Token Provided");
//   }
//   try {
//     const decode = jwt.verify(token, "jwtPrivateKey");
//     req.user = decode;
//     // const userId = decode._id;
//     // console.log(decode);
//     // // You can use the userId or other information as needed
//     // // For example, you can pass it to the next middleware
//     // req.userId = userId;
//     next();
//   } catch (error) {
//     return res.status(400).send("Invalid Token");
//   }
// }

// module.exports = auth;

// // In "../middleware/auth.js"

// // const jwtDecode = require("jwt-decode");

// // const parseJwt = (token) => {
// //   try {
// //     return jwtDecode(token);
// //   } catch (e) {
// //     return null;
// //   }
// // };

// // // Function 1
// // const getIdFromToken = (token) => {
// //   if (token == null || token === undefined) {
// //     return -1;
// //   }
// //   const decodedToken = parseJwt(token);
// //   return decodedToken?.id ? decodedToken.id : -1;
// // };

// // Function 2 (assuming this is intended to be a different function)
// // const getRoleFromToken = (token) => {
// //   if (token == null || token === undefined) {
// //     return -1;
// //   }
// //   const decodedToken = parseJwt(token);
// //   return decodedToken?.role ? decodedToken.role : -1;
// // };


// // module.exports = 
// //   // parseJwt,
// //   getIdFromToken
//   // getRoleFromToken,



// //  const getUserNameFromToken = (token) => {
// //     if(token == null || token == undefined){
// //         return "";
// //     }
// //     const decodedToken = parseJwt(token)
// //     return decodedToken?.username? decodedToken.username: "";
    
// // }

// //  const getEmailFromToken = (token) => {
// //     if(token == null || token == undefined){
// //         return "";
// //     }
// //     const decodedToken= parseJwt(token)
// //     return decodedToken?.email? decodedToken.email: "";
    
// // }


// //  const getIdFromHeader = (authHeader)=> {
// //     const token = authHeader && authHeader.split(" ")[1];
// //     return getIdFromToken(token);
// // }

// //  const getRoleFromHeader = (authHeader)=> {
// //     const token = authHeader && authHeader.split(" ")[1];
// //     return getRoleFromToken(token);
// // }

// //  const getEmailFromHeader = (authHeader) => {
// //     const token = authHeader && authHeader.split(" ")[1];
// //     return getEmailFromToken(token);
// // }

// //  const getNameFromHeader = (authHeader) => {
// //     const token = authHeader && authHeader.split(" ")[1];
// //     return getUserNameFromToken(token);
// // }

// // module.exports ={
// //   isValidToken,
// //   getIdFromToken,
// //   getRoleFromToken,



// // }

