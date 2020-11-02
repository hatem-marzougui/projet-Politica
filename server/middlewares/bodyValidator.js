const {body,validationResult   } = require("express-validator");


const registerRules = () => [
    body("firstname", "firstname is Required").notEmpty(),
    body("lastname", "lastname is Required").notEmpty(),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password must contain at least 6 charachters").isLength({  min: 6, max: 20 }),
    
  ];
  
  const loginRules = () => [
    body("email", "Invalid Email").isEmail(),
    body("password", "password must contain at least 6 charachters").isLength({ min: 6, max:20}),
  ];


  //elli bech yitlhelna bil les erreurs
  const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({errors: errors.array().map((el) => ({ msg: el.msg, })), });
    }
    next();
  };



  module.exports = {validator,loginRules,registerRules};