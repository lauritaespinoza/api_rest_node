const mongoose = require("mongoose");

const connection = async() => {

    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/my_database");

        console.log("Conectado a la base de datos")
    } catch(error){
        console.log(error);
        throw new Error("No se pudo conectar");
    }
}

module.exports={
    connection
}