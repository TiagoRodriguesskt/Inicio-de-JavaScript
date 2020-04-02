var xhr = new XMLHttpRequest();

//Buscando informação de ums site
xhr.open('GET', 'https://www.site.com/');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}