console.log("hello");

const url = "http://localhost:3000/movies"
const urlMovie2 = "http://localhost:3000/movies/2"
const urlMovie6 = "http://localhost:3000/movies/6"

/*fetch(url, {
    method: "GET"
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
*/

fetch(urlMovie2, {
    method: "GET"
})
    .then(response => response.json())
    .then(data => movie2 = data)
    .then(json => console.log(json))
    .catch(error => console.log(error))



