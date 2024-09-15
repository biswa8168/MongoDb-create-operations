const express = require('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv').config ();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT};`);
});

async function main () {
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.sp7lh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);     
}

let po = main();
po.then((d)=>{
    console.log("Connected to db");
    const Students = mongoose.model('Students', { name: String });
    const Student1 =new Students ({ name: 'Pankaj Sharma' });

    let po = Student1.save ();
    po.then(()=>console.log('Saved')).catch();    
}).catch((e)=>{
    console.log("error");    
});
