console.log('BOOGA BOOGA CHA');
const result = document.querySelector('#Result'); //where the cards where render
const charLink = 'https://rickandmortyapi.com/api/character/?name=' //API link for char
const searchBar = document.querySelector('#SearchBar');

function RenderCards(APILink,renderTo) {
    axios.get(APILink)
        .then((response) => {
            var accessTemp = response.data.results;
            var cards = accessTemp.map(elements => {
                var divOutput = document.createElement('DIV');
                divOutput.classList.add('Card');
                divOutput.innerHTML = OriginalTemplateIdea(elements);
                return renderTo.appendChild(divOutput);
            });
        })
        .catch(error => {
            var errorTemp = document.createElement('p');
            errorTemp.classList.add('error');
            errorTemp.innerHTML = 'Something Went Wrong With Your Search: ' + error;
            renderTo.appendChild(errorTemp);
        });
}

function OriginalTemplateIdea(data) {
    return `
        <div class='img' style='background-image:url(${data.image})'> </div>
        <div class='words'>
            <p class='name'>${data.name}</p>
            <p class='gender'>Gender: ${data.gender}</p>
            <p class='origin'>Origin: ${data.origin.name}</p>
            <p class='status'>Status: ${data.status}</p>
        </div>
    `
}

function clear() { //clears the results
    while(result.firstChild) {
        result.removeChild(result.lastChild);
    }
}

function Search() {
    var searched = charLink + searchBar.value;
    console.log(searched);
    clear();
    RenderCards(searched,result);
}

RenderCards(charLink,result)

/* £ Oof +1*/
