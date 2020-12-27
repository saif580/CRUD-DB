const mongoose=require('mongoose');
const Superhero=require('./models/superheros')

mongoose.connect('mongodb://localhost/superheros', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Connection establish");
    })
    .catch(err=>{
        console.log("Something went wrong");
        console.log(err);
    })

// const superman=new Superhero({
//     name:"superman",
//     powerlevel:1000,
//     category:"superhero"
// })
// superman.save()
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log("Data Error:(")
//         console.log(err);
//     })

const seedsSuperhero=[
    {
        name:"superman",
        powerlevel:1000,
        category:"superhero"
    },
    {
        name:"thor",
        powerlevel:1000,
        category:"superhero"
    },
    {
        name:"ironman",
        powerlevel:600,
        category:"superhero"
    },
    {
        name:"goku",
        powerlevel:10000,
        category:"superhero"
    },
    {
        name:"spiderman",
        powerlevel:800,
        category:"superhero"
    },
    {
        name:"stan lee",
        powerlevel:50,
        category:"human"
    },
    {
        name:"thanos",
        powerlevel:2000,
        category:"villian"
    }
]

Superhero.insertMany(seedsSuperhero)
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })