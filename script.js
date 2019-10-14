/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

// Global variables are defined before they can be used to in the function
const itemsPerPage = 10;
const studentList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const page = document.querySelector('.page');


/**
. ShowPage Function that shows only the first ten items of the student list based on the start and end Index.
. Student list and page are passed in as arguments when the function is invoked.

**/
const showPage = (list, page) => {

	const startIndex = (page * itemsPerPage) - itemsPerPage;
	const endIndex = (page * itemsPerPage) - 1;

	for (let i = 0; i < list.length; i += 1) {

		if (i >= startIndex && i <= endIndex) {

			list[i].style.display = 'block';

		} else {

			list[i].style.display = 'none';

		}

	}

};
/*
.AppendPage links function that takes only one argument the student List
.local variables are defined which are only used inside this function such as number of pages.
. DOM elements are dynamically created and appended to a div with a className pagination depending on the number of pages
. click event listener is added depending on the current element clicked using the current event object property.

*/
const appendPageLinks = (list) => {
let numberOfPages = Math.ceil(listItems.length / itemsPerPage);
const div = document.createElement('div');
div.className = 'pagination';
page.append(div);
const ul = document.createElement('ul');
div.appendChild(ul);
for (let i = 1; i <= numberOfPages; i += 1) {
const li = document.createElement('li');
li.className = 'active';
ul.appendChild(li);
const aTag = document.createElement('a');
aTag.innerHTML = i;
li.appendChild(aTag);

aTag.addEventListener("click", (e) => {
    const isClicked = e.target;
    const currentPage = e.target.textContent;
    showPage(listItems,currentPage);
    
        });	
}
const pagination = document.querySelector('.pagination');
const listNumbers = pagination.querySelectorAll('a');
console.log(listNumbers);
for(let i = 0; i < listNumbers.length; i+=1) {
listNumbers[i].addEventListener("click", function() {
    
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
listNumbers[i].className += " active";
    });
}
  
};

//Calling both the functions which are defined above.
showPage(listItems, 1);
appendPageLinks(listItems);









