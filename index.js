console.log("hello");

const urlMovie2 = "http://localhost:3000/movies/2"
const urlMovie6 = "http://localhost:3000/movies/6"

/*fetch(url, {
    method: "GET"
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
*/

/*
fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // do stuff with `data`, call second `fetch`
        return fetch(data.anotherUrl)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // do stuff with `data`
    })
    .catch(function(error) {
        console.log('Requestfailed', error)
    });
*/

/*
fetch(urlMovie2, {
    method: "GET"
})
    .then(response => response.json())
    .then(function(data){
        let movie2 = data[0];

    })

*/
/*
Promise.all([
    fetch(urlMovie2, {
        method: "GET"
    }),
    fetch(urlMovie6, {
        method: "GET"
    })

]).then((responses) => {
    console.log(responses);
    responses.map(function (response) {
        response.json()
            .then(json => console.log(json));

    })

})

*/


const firstRequest = fetch(urlMovie2, {
    method: "GET"
});

const secondRequest = fetch(urlMovie6, {
    method: "GET"
});




firstRequest
    .then(function(response){
        return response.json();
    })
    .then(function (json) {
        this.firstMovie = json;
        return console.log(json);
    })
    .then(function () {
        return secondRequest;
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        this.secondMovie = json;
        return console.log(json);
    })
    .then(function () {
        let arr = [];
        arr.push(firstMovie);
        arr.push(secondMovie);
        console.log(arr);

        return arr
    })


