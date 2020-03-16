'use strict';

/** 
 * @module aclMiddleware
*/
module.exports = (capabilities) => {
  return (req, res, next) => {
    try {
      if(req.user.userRole[0].capabilities.includes(capabilities)){
        console.log('got it');
        next();
      }
      else{
        next('access denied');
      }
    }
    catch(error){
      next('invalid login');
    }
  };
};