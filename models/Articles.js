const { Schema, model} = require("mongoose");

const ArticleSchema = Schema({
    title : {
        type : String,
        required: true
    } ,
    content :  {
        type : String,
        required: true
    } ,
    Date:  {
        type : Date,
        default: Date.now
    } 
})

module.exports = model("Article",ArticleSchema,articles);