const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: '1979',
database: 'likeme',
allowExitOnIdle: true
})

 
const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post agregado")
    }

   

    
      const obtenerPost = async () => {
      const { rows } = await pool.query("SELECT * FROM posts")
       console.log(rows)
         return rows
       }
         

      module.exports = {obtenerPost, agregarPost};