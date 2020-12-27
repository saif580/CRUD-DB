const mongoose=require('mongoose');

const heroSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    powerlevel:{
        type:Number,
        min:0,
        required:true
    },
    category:{
        type:String,
        lowercase:true,
        enum:['superhero','villian','human']
    }
});

const Superhero=mongoose.model('Superhero',heroSchema);

module.exports=Superhero;