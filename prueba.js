import fetch from "isomorphic-fetch";
fetch("http://localhost:8000/pets").then(res=>res.json())
.then(data=>console.log(data));