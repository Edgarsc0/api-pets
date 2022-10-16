import mysql from "mysql2";
const con=mysql.createConnection({
    host:"containers-us-west-105.railway.app",
    password:"cRTWdTz50nTvnKlkHvAX",
    database:"railway",
    port:"6398",
    user:"root"
});
try{
    con.connect();
}catch(err){
    console.log(err);
}
export const getPets=(req,res)=>{
    con.query(`select * from pets`,(err,result)=>{
        console.log(err)
        res.send(result);
    });
}
export const getPetById=(req,res)=>{
    con.query(`select * from pets where id=${req.params["id"]}`,(err,result)=>{
        result.length==0?res.send({error:"Not found",status:"404"}):res.send(result);
    });
}
export const addPet=(req,res)=>{
    const {name,category,desc,img}=req.headers;
    con.query(`insert into pets(namePet,category,description,imgUrl) values (?,?,?,?)`,[name,category,desc,img],(err,result)=>{
        if(err || result.affectedRows!=1){res.send({error:"error"})}else{
        res.send(result);}
    });
}
export const modifyPet=(req,res)=>{
    const {name,category,desc,img}=req.headers;
    con.query(`update pets set namePet="${name}",category="${category}",description="${desc}",imgUrl="${img}" where id=${req.params["id"]}`,(err,result)=>{
        res.send(result);
    });
}
export const deletePet=(req,res)=>{
    //console.log(req.params["id"]);
    con.query(`delete from pets where id=${req.params["id"]}`,(err,result)=>{
        if(err || result.affectedRows!=1){res.send({error:"error"})}else{
        res.send(result);}
    });
}