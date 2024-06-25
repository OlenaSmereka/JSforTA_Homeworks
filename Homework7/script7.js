// Task1

//     let MyWindow=window.open("","MyWindow", "width=300, height=300");
//     setTimeout(() => {
//         MyWindow.resizeTo(500,500)
//     }, 2000);
//     setTimeout(() => {
//         MyWindow.moveTo(200,200)
// }, 4000);
//     setTimeout(() => {
//         MyWindow.close()
//     }, 6000);


// Task2

// let content = document.querySelector("#text");
// let button = document.querySelector("#title");

// button.addEventListener("click", function changeCSS() {
//   content.style.color = "orange";
//   content.style.fontSize = "20px";
//   content.style.fontFamily = "Comic Sans MS";
// });

// Task3

// let button1 = document.getElementById('title1');
// let button2 = document.getElementById('title2');
// let button3 = document.getElementById('title3');
// let link = document.querySelector('a');

// button1.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'lightblue';
// });

// button2.addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = 'pink';
// });

// button3.addEventListener('mousedown', function() {
//     document.body.style.backgroundColor = 'brown';
// });
// button3.addEventListener('mouseup', function() {
//     document.body.style.backgroundColor = 'white';
// });

// link.addEventListener('mouseover', function() {
//     document.body.style.backgroundColor = 'yellow';
// });
// link.addEventListener('mouseout', function() {
//     document.body.style.backgroundColor = 'white';
// });

// Task4

// let dropdown=document.querySelector("#dropdownlist");
// let button=document.querySelector("#remove");
// button.addEventListener("click", function(){
//     const chosenItem=dropdown.selectedIndex;
//     if (chosenItem !== -1) {
//         dropdown.remove(chosenItem);
//       }
// })

// Task5

// let button=document.querySelector('#title1');
// let message=document.querySelector('#message');

// button.addEventListener("click", function(event){
//     message.textContent="I was pressed!"
// });
// button.addEventListener("mouseover", function(event){
//     message.textContent="Mouse on me!"
// });
// button.addEventListener("mouseout", function(event){
//     message.textContent="Mouse is not on me!"
// });

// Task6

// function updateParams() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     let params = document.getElementById('params');
//     params.textContent = `Width:  ${width}, Height:  ${height}`;
// }
// window.addEventListener('resize', updateParams);

// Task7
const cities = {
    'ger' : ['Munich', 'Stuttgart', 'Bremen', 'Berlin'],
    'usa': ['Boston', 'Austin', 'Orlando', 'Chicago'],
    'ukr' :['Lviv', 'Kyiv', 'Lutsk', 'Ternopil'],
}

let countryList = document.getElementById('country');
let citiesList = document.getElementById('cities');
let selectedInfo = document.getElementById('selectedInfo');

function CityList() {
    let selectedCountry = countryList.value;
    citiesList.innerHTML = '';

    if (selectedCountry in cities) {
        cities[selectedCountry].forEach(city => {
            let option = document.createElement('option');
            option.textContent = city;
            citiesList.appendChild(option);
        });
    }

    const selectedCountryName = countryList.options[countryList.selectedIndex].text;
    const selectedCity = citiesList.value;
    selectedInfo.textContent = `${selectedCountryName}, ${selectedCity}`;
}

countryList.addEventListener('change', CityList);

citiesList.addEventListener('change', function() {
    const selectedCountryName = countryList.options[countryList.selectedIndex].text;
    const selectedCity = citiesList.value;
    selectedInfo.textContent = `${selectedCountryName}, ${selectedCity}`;
});

CityList();

