document.querySelector("#buscar").addEventListener("click",function() {
    
    category=document.querySelector("#category").value
    country=document.querySelector("#country").value
    url = "https://newsapi.org/v2/top-headlines?apiKey=3b559c9fcd0d4cd38f916a08bb12c8df&category="+category+"&country="+country
    fetch(url)
        .then(datatype=>datatype.json())
        .then(response => {
            console.log(response.articles)
            salida=""
            response.articles.forEach(e => {
                salida=salida+`
                <div class="col">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${e.title}</h1>
                    <h2 class="card-texts">${e.author}</h2>
                    <h4 class="card-texts">${e.source.name}</h4>`
                    if (e.description!=null) {salda=+`<p class="card-texts">${e.description}</p>`}
                    if (e.urlToImage!=null) {salida=+`<img src="${e.urlToImage}" alt="">`}
                    salida=+`<a href="${e.url}">ir a la noticia</a>
                    </div>
                </div>
                </div>`
            });
            document.querySelector("#salida").innerHTML=salida
        });
});