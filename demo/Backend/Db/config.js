const mongoose = require("mongoose")

mongoose.connect("mongodb://ranaka:eKc3b9iA4Iid0WiA7GxxigYK@15.206.7.200:28017/ranaka?authSource=admin&readPreference=primary&ssl=false")
.then(() => {
    console.log("Connected to Mongo")
})
.catch((err)=> {
    console.log("Something went wrong", err)
})
