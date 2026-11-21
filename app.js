import express from "express";
const app = express();
app.use(express.json());
import films from "./data.js";

app.get("/films", (req, res) => {
    res.status(200).json(films)})

app.get("/films/:id", (req, res) => {
    const {id} = req.params;
    const film = films.find(p=> p.id === Number(id));
    if(!film) {
        return res.status(404).json({message: "Film not found"});
    }
    res.status(200).json(film)
    })

app.post("/films", (req,res) => {
    const { titre, realisateur, anne, genre, duree } = req.body;

});


















const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
})
