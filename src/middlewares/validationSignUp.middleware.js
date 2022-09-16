import joi from "joi";

const signupSchema = joi.object({
    name: joi.string().trim().required(),
    email: joi.string().trim().email().required(),
    password: joi.number().min(8).required(),
    confirmPassword: joi.number().required(),
    image: joi.string().uri().required()
  });
  
  function validateSignUpSchema(req, res, next) {
    const validation = signupSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      return res.status(422).send({ message: "validation.error.message "});
      
    }
    next();
  }
  
  export default validateSignUpSchema;