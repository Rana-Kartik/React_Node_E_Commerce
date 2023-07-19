//you tube video links
//https://www.youtube.com/watch?v=GSpIpbG9zDA&list=PL8p2I9GklV45Oiq7svCLT2xmOoCogUgrO&index=4


const mongoose = require("mongoose")

mongoose.connect("mongodb://ranaka:eKc3b9iA4Iid0WiA7GxxigYK@15.206.7.200:28017/ranaka?authSource=admin&readPreference=primary&ssl=false")
.then(() => {
    console.log("Connected to Mongo")
})
.catch((err)=> {
    console.log("Something went wrong", err)
})
 