// Task1
// const div1=document.getElementById('test');
// div1.textContent="Last";

// const div1=document.querySelector("#test");
// div1.innerHTML="Last";

// Task2
// const picture=document.querySelector("img.image")
// picture.src="cat.jpg";
// window.alert(picture.src);

// Task3

// let elements=document.querySelectorAll('#text p');
// elements.forEach(function(paragraph, index) {
//     let newElement=document.createElement('p');
//     newElement.textContent=`Selector text ${index}: ${paragraph.textContent}`;
//     document.body.appendChild(newElement);
// })

// Task4
// function showModal() {
//     let unnumbered_list=document.getElementById("list").getElementsByTagName('li');
//     let newList=[];
//     newList.push(unnumbered_list[0].textContent);
//     newList.push(unnumbered_list[unnumbered_list.length-1].textContent);
//     newList.push(unnumbered_list[1].textContent);
//     newList.push(unnumbered_list[3].textContent);
//     newList.push(unnumbered_list[2].textContent);
//     alert(newList.join(', '));
// }

// // Task5
// let header=document.querySelector('h1');
// header.style.backgroundColor="lightgreen";

// let paragraph = document.getElementById("myDiv");
// paragraph.firstElementChild.style.fontWeight = "bold";
// paragraph.children[1].style.color = "red";
// paragraph.children[2].style.textDecoration = "underline";
// paragraph.lastElementChild.style.fontStyle = "italic";

// let listItems = document.querySelectorAll("#myList li");
// let text = '';
// listItems.forEach(function(li) {
//     text += li.textContent.trim();
//     text += '\n';
// });
// listItems[0].parentNode.innerHTML = text;

// let span=document.querySelector('span');
// span.style.visibility="hidden";

// Task6
// let message1=prompt('Please, enter any text');
// let message2=prompt('Please, enter alternative text');

// let firstInput=document.getElementById("input1");
// let secondInput=document.getElementById("input2");
// firstInput.value=message1;
// secondInput.value=message2;

// let extra=firstInput.value;
// firstInput.value=secondInput.value;
// secondInput.value=extra;

// Task7
// let body = document.body;
// let MyMain = document.createElement('main');
// main.className = 'mainClass check item';

// let divElement = document.createElement('div');
// divElement.id = 'myDiv';

// let paragraphElement = document.createElement('p');
// paragraphElement.textContent = 'First paragraph';

// divElement.appendChild(paragraphElement);
// MyMain.appendChild(divElement);
// document.body.prepend(MyMain);


