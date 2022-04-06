const API_BASE_URL = 'https://swapi.dev/api/planets?search=alderaan';
const butChange = document.querySelector('button');

const showResidents = (event) => {
    console.log("button clicked");
    axios.get(API_BASE_URL).then((res) => {
        const planet = res.data.results;
        console.log(planet);
        const residents = planet.map((names) => names.residents);
        //its a double array or 2d array
        console.log(residents[0][1]);
        for(let i = 0; i < residents[0].length; i++){
            console.log(residents[0][i]);
            axios.get(residents[0][i]).then((res) => {
                let person = res.data.name;
                console.log(person);
                var people = document.createElement("h2");
                people.innerHTML = person;
                // dont ever forget append child when you create an element!
                document.body.appendChild(people);
            })
        }
        
    })
}

butChange.addEventListener("click", showResidents);
