// // Import necessary modules
// import { Request, Response, NextFunction } from 'express';
// // import helper to auth
// import * as Helper from './helper'

// import users from '../db/models/Users'



// // Middleware function for admin authorization
// const adminMiddleware = async (req, res,next) => {
  
// //  getting the role from the token

// const role = Helper.getRoleFromHeader(req.headers["authorization"]);
// const email = Helper.getEmailFromHeader(req.headers["authorization"]);

// const validUserAdmin =  await users.findOne({where:{email:email}})


//   // check user admin
//   if (validUserAdmin) {
//     // Check if user is authenticated and is an admin
//   if (role === 1) {
//     // User is authenticated and is an admin, so allow access to the next middleware or route handler
//     next();
//   } else {
//     // User is not authenticated or is not an admin, return unauthorized status
//     res.status(401).json({ message: 'Unauthorized' });
//   }}
//   else {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// export default adminMiddleware;