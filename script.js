*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f4f8f4;
}

header{
    background:#2E7D32;
    color:white;
    padding:20px;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

nav ul{
    list-style:none;
    display:flex;
    gap:20px;
}

nav a{
    color:white;
    text-decoration:none;
}

.hero{
    height:90vh;
    background:linear-gradient(
        rgba(0,0,0,.5),
        rgba(0,0,0,.5)
    ),
    url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854");
    background-size:cover;
    background-position:center;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    color:white;
}

.hero-content h2{
    font-size:3rem;
}

.hero-content p{
    margin:20px 0;
    font-size:1.2rem;
}

.hero button{
    padding:15px 30px;
    border:none;
    border-radius:10px;
    background:#81C784;
    cursor:pointer;
}

.estatisticas{
    display:flex;
    justify-content:center;
    gap:30px;
    padding:50px;
    flex-wrap:wrap;
}

.card{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
    text-align:center;
    width:250px;
}

.sobre,
.tecnologias,
.educacao,
.contato{
    padding:80px 10%;
    text-align:center;
}

.cards{
    display:flex;
    gap:20px;
    justify-content:center;
    flex-wrap:wrap;
}

.tec-card{
    background:white;
    width:300px;
    padding:25px;
    border-radius:15px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
}

.educacao button{
    margin:10px;
    padding:10px 20px;
    cursor:pointer;
}

form{
    max-width:500px;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:15px;
}

input,
textarea{
    padding:15px;
    border:1px solid #ccc;
    border-radius:8px;
}

form button{
    background:#2E7D32;
    color:white;
    border:none;
    padding:15px;
    cursor:pointer;
}

footer{
    background:#1B5E20;
    color:white;
    text-align:center;
    padding:20px;
}

@media(max-width:768px){

    nav{
        flex-direction:column;
        gap:15px;
    }

    .hero-content h2{
        font-size:2rem;
    }

}
