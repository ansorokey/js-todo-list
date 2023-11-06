
// Find elements in the document for manipulation
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const inputButton = document.querySelector('button');

// When a child of the list container is clicked,
// the event will bubble up to the list container
// then, we check what kind of element triggered the event using e.target.tagName
listContainer.addEventListener('click', (e) => {

    // if a list item was clicked:
    if(e.target.tagName === 'LI') {
        // we add OR remove the checked class from it, which changes the css
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        // if a span was clicked, it was the button to delete an item
        // since the li is the parent of the span, we call this method to delte the parent - the list item
        e.target.parentElement.remove();
    }

    // save the updates made to the list
    saveData();
}, false);

// Add an event listener to the add button
// alerts if the input is empty, creates a new list item with input contents
inputButton.addEventListener('click', () => {
    if(inputBox.value === '') {
        window.alert('Cannot add an empty task');
    } else {
        // create a new listItem, give it text content, add it to the end of the list
        let newListItem = document.createElement('li');
        newListItem.innerHTML = inputBox.value;
        listContainer.appendChild(newListItem);

        // create a delete button, add it to the task,
        let delButton = document.createElement('span');
        delButton.innerHTML = "\u00d7";
        newListItem.appendChild(delButton);

        // save updates and clear input
        saveData();
        inputBox.value = ''
    }
});

// saves the entire contents of the todo list to local storage at 'data'
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// loads whatever was saved in local storage at 'data'
function loadData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

// loads list data when page is opened
loadData();
