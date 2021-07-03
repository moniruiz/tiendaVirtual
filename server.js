const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("HOLA MUNDO");
})
app.listen(3000 , function(){
    console.log("iniciando server en puerto... 3000");
})