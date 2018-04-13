// const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
// const key = '57e3ebfad9fe42688555590c7920297c'; //2
// let url; //3

// //search form
// const searchTerm = document.querySelector('.search');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

// //results navigation
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');

// //results section
// const section = document.querySelector('section');

// //nav Variable

// nav.style.display = 'none';

// //Pagination and Display
// let pageNumber = 0;
// let displayNav = false;

// //Event listeners

// searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);

// //04-fetchResults
// function fetchResults(e) {
//     e.preventDefault();
//     //Assemble the full URL
//     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
//     console.log("url, " + url);

//     if (startDate.value !== '') {
//         console.log(startDate.value)
//         url += '&begin_date=' + startDate.value;
//     };

//     if (endDate.value !== '') {
//         url += '&end_date=' + endDate.value;
//     };
//     fetch(url).then(function (result) {
//         return result.json();
//     }).then(function (json) {
//         displayResults(json);
//     });
// }
// function displayResults(json) {
//     let articles = json.response.docs;
//     while (section.firstChild) {
//         section.removeChild(section.firstChild);
//     }
//     function nextPage(e) {
//         pageNumber++; //1
//         fetchResults(e);  //2
//         console.log("Page number:", pageNumber); //3
//     };


//     if (articles.length === 10) {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none';
//         for (let i = 0; i < articles.length; i++) {
//             let article = document.createElement('article');
//             let heading = document.createElement('h2');
//             let link = document.createElement('a');
//             let img = document.createElement('img');
//             let para = document.createElement('p');
//             let clearfix = document.createElement('div');

//             let current = articles[i];
//             console.log("Current:", current);

//             link.href = current.web_url;
//             link.textContent = current.headline.main;

//             para.textContent = 'Keywords: ';

//             for (let j = 0; j < current.keywords.length; j++) {
//                 let span = document.createElement('span');
//                 span.textContent += current.keywords[j].value + ' ';
//                 para.appendChild(span);
//             }

//             if (current.multimedia.length > 0) {
//                 img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
//                 img.alt = current.headline.main;
//             }

//             clearfix.setAttribute('class', 'clearfix');

//             article.appendChild(heading);
//             heading.appendChild(link);
//             article.appendChild(img);
//             article.appendChild(para);
//             article.appendChild(clearfix);
//             section.appendChild(article);
//         }

//     }
// };
// function nextPage() {
//     console.log("Next button clicked");
// }

// function previousPage() {
//     console.log("Next button clicked");
//}



// Group 2
function displayResults(json) {                     //declaring a function called displayResults using "Json as filler for now"
    // console.log('Display Results', json);        //
    // console.log(json.response.docs);
    while (section.firstChild)                      //while section ihe html has first child remove child aka first article. removing <a> tag/ results
      section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;              //declaring articles to equel json response doc
    // console.log(articles);
    if (articles.length === 0) {                    //if article length is 0 say no results
      console.log('No results');
    } else {                                        //otherwise
      for (let i = 0; i < articles.length; i++) {   // use for loop: if given variable is less the articles length then keep adding;
        // console.log(i);
        let article = document.createElement('article'); //locally declaring our variables to create an element attach to a html tag
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');
        let current = articles[i];                      //current is declared to equal the amount of article in our section html
        console.log('Current:', current);
        link.href = current.web_url;                    //sets the web url as the data from the json to link us to the article
        link.textContent = current.headline.main;       //set link text to headline of articles at url
        para.textContent = 'Keywords: ';                // Keywords is the just a string that will go befor the para.textContent 