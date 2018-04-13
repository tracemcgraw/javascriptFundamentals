// var starWarsPeopleList = document.querySelector('ul');

// fetch ('https://swapi.co/api/people') //api end point
// .then(function(response){           //pass in argument
//     return response.json()
// })
// .then(function(json){
//     let people = json.results;
//     for(p of people){
//         let listItem = document.createElement('li')//makes the dotss
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem); //puts the names
//     }
// })

var starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.co/api/people')
.then(function(response){
    return response.json();
})
.then(function(json){
    let people = json.results;

    for(p of people){
        console.log(p);
    }
    for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + p.birth_year +'</p>';
        starWarsPeopleList.appendChild(listItem);
    }
});