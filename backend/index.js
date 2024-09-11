 const { agregarPost, obtenerPost } = require('./descripcion')
 const express = require('express');
const app = express();
app.listen(3000, console.log("SERVIDOR ENCENDIDO"))
app.get("/posts", async (req, res) => {
 const posts = await obtenerPost()
res.json(posts)
 })

 app.use(express.json())

 app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
     await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con éxito")
    })