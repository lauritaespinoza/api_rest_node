const validator = require("validator");

const articleValidator = (parameters) =>{
    let validateTitle= !validator.isEmpty(parameters.title);

    let validateContent= !validator.isEmpty(parameters.content);;

    if(!validateTitle || !validateContent){
        throw new Error ("Parametros no validos");
    }
}

module.exports = {
    articleValidator
}