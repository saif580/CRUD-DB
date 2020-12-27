const { urlencoded } = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Superhero=require('./models/superheros')
const methodOverride=require('method-override');

mongoose.connect('mongodb://localhost/superheros', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false })
    .then(()=>{
        console.log("Connection establish");
    })
    .catch(err=>{
        console.log("Something went wrong");
        console.log(err);
    })

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/superheros',async(req,res)=>{
    const superheros=await Superhero.find();
    res.render('allheros.ejs',{superheros})
});

app.get('/superheros/new',(req,res)=>{
    res.render('new.ejs')
})

app.post('/superheros',async(req,res)=>{
    const newsuperhero=new Superhero(req.body);
    await newsuperhero.save();
    res.redirect('/superheros')
})

app.get('/superheros/:id',async(req,res)=>{
    const{id}=req.params;
    const heroInfo=await Superhero.findById(id);
    res.render('details.ejs',{heroInfo})
});

app.get('/superheros/:id/edit',async(req,res)=>{
    const{id}=req.params;
    const heroInfo= await Superhero.findById(id);
    res.render('edit.ejs',{heroInfo});
})

app.put('/superheros/:id',async(req,res)=>{
    const {id}=req.params;
    const updatehero=await Superhero.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
    res.redirect(`/superheros/${updatehero._id}`)
})

app.delete('/superheros/:id',async(req,res)=>{
    const {id}=req.params;
    const deleteHero=await Superhero.findByIdAndDelete(id);
    res.redirect('/superheros');
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
});

app.listen(3000,(req,res)=>{
    console.log("App is listening to Port 3000");
})

