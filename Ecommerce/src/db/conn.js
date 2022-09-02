const mongoose  = require('mongoose')

mongoose.connect( "mongodb+srv://atulranjan:atul@ecommerceshops.zo7jp.mongodb.net/BanarasiCraft?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then((res) => {
    console.log("database in now connected ")

}).catch((err) => {
    
   console.log("database not connected" ,err)

});