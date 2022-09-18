import joi from "joi";

const CartBuySchema = joi.object({
    token: joi.number().min(1).required(),
    itens: joi.required(),
    value: joi.number().min(1).required(),
  });
  
  function validateCartSchema(req, res, next) {
    const validation = CartBuySchema.validate(req.body, { abortEarly: false });
    
    if(req.body.token === null || req.body.itens === 0){
        return res.status(422).send({ message: "validation.error.message "});
    }
    if (validation.error) {
        return res.status(422).send({ message: "validation.error.message "});
    }
    next();
  }
  
  export default validateCartSchema;