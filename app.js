import express from "express";
import {getPets,getPetById,addPet,deletePet,modifyPet} from "./controllers/apiControl.js"
const app=express();

app.get("/pets",getPets);
app.get("/getPetById/:id",getPetById);
app.post("/addPet",addPet);
app.post("/deletePet/:id",deletePet);
app.post("/modifyPet/:id",modifyPet);

const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`server on port ${port}`);
});