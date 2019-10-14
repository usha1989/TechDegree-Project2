
const searchDiv = document.querySelector('div.page-header');
const search = document.createElement('INPUT');
search.className = 'student-search';
search.className = 'student-search input';
search.type = "text";
search.textContent = "Hello Type a Name";
const submit = document.createElement('INPUT');
submit.className = 'student-search button';
submit.type = "SUBMIT";
submit.textContent = "SUBMIT";
searchDiv.appendChild(search);
searchDiv.appendChild(submit);

//global variables to reference search and button elements
const studentSearch = document.querySelector('.student-search.input');
const studentSubmit = document.querySelector('.student-search.button');
const studentName = document.querySelectorAll('li');
console.log(studentSearch);
console.log(studentSubmit);
console.log(studentName);

// Create a function to perfrom your search and give it two `parameters` — searchInput, names. 

function searchResult(studentList) {

let input = studentSearch.value;
input = input.toLowerCase();
    for(let i = 0; i < studentList.length; i+=1) {
     if (!studentList[i].innerHTML.toLowerCase().includes(input)) { 

                studentList[i].style.display= "none"; 


        }
        else { 

            studentList[i].style.display= "block";  
            
            } 

        
        
}



}



        
submit.addEventListener('click', (event) => {
  event.preventDefault();
searchResult(studentName);
  
  console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

  // Invoke your search function here - Arguments: search, tableCells
searchResult(studentName);

  // Helpful log statement to test function
  console.log('Keyup event on the Search input is functional!');
});












