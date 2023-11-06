const inputBox = document.querySelector('#input-box');

const listContainer = document.querySelector('#list-container');
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

const inputButton = document.querySelector('button');
inputButton.addEventListener('click', () => {
    if(inputBox.value === '') {
        window.alert('Cannot add an empty task');
    } else {
        let newListItem = document.createElement('li');
        newListItem.innerHTML = inputBox.value;
        listContainer.appendChild(newListItem);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        newListItem.appendChild(span);
        saveData();
        inputBox.value = ''
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

loadData();
