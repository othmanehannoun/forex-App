const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// ---------connection database--------//
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false, 
     useCreateIndex: true})
     .then(console.log('database connected!'))
     .catch(err=>{
      console.log(err);
    })

    module.exports = mongoose;