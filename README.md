<h1>API DE ALOJAMIENTO DE MASCOTAS</h1>
<h3>Realizó SANCHEZ CATARINO EDGAR</h3>
<strong>GET: /pets</strong>
GET: https://api-pets-production.up.railway.app/pets
<br>
Server response:
<pre>
[
  {
    "id":1,
    "namePet":"Newton",
    "category":"Gato",
    "description":"el es un gato muy bonito",
    "imgUrl":"https://th.bing.com/th/id/OIP.lp2VZXMe35-M1YF57kYJVQHaE7?w=285&h=190&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  },
  {
    "id":2,
    "namePet":"schrodinger",
    "category":"gato",
    "description":"el es un gato muy inteligente",
    "imgUrl":"https://th.bing.com/th/id/OIP.QT_dPB8hpJtuXxukrSjJhgHaE7?w=285&h=190&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  },
  {
    "id":3,
    "namePet":"ganimedes",
    "category":"perro",
    "description":"un perro que nunca te va a fallar",
    "imgUrl":"https://th.bing.com/th/id/OIP.6VxupNs7ee2hyKlMiGyAcQHaGL?pid=ImgDet&rs=1"
  }
]
</pre>

<strong>GET: /getPetById/:id</strong>
GET: https://api-pets-production.up.railway.app/getPetById/3"
<br>
Server response:
<pre>
[
  {
    "id":3,
    "namePet":"ganimedes",
    "category":"perro",
    "description":"un perro que nunca te va a fallar",
    "imgUrl":"https://th.bing.com/th/id/OIP.6VxupNs7ee2hyKlMiGyAcQHaGL?pid=ImgDet&rs=1"
  }
]
</pre>

<strong>POST: /addPet</strong>
POST: https://api-pets-production.up.railway.app/addPet
HEADERS:
<ul>
  <li>name</li>
  <li>category</li>
  <li>desc</li>
  <li>img</li>
</ul>

<strong>POST: /deletePet/:id</strong>
POST: https://api-pets-production.up.railway.app/deletePet/:id

<strong>POST: /modifyPet:/:id</strong>
POST: https://api-pets-production.up.railway.app/modifyPet/:id
HEADERS: 
<ul>
  <li>name</li>
  <li>category</li>
  <li>desc</li>
  <li>img</li>
</ul>
