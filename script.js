const url = 'http://localhost:3000/notes/'

document
    .querySelector('#save-note')
    .addEventListener('click', function() {
        const noteText = document.querySelector('#write-note').value
        createNotes(noteText)
    })

function createNotes (noteText) { 
    fetch(url, {
        method: 'POST', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            item: noteText
           })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

const noteList = document.querySelector('note-list')

fetch(url, {
    method: 'GET',
})
    .then(res => res.json())
    .then(data => {
        for (note of data){
            console.log(note.item)
            const itemElement = document.createElement('li')
            itemElement.innerText = note.item
            noteList.appendChild(itemElement)
        }
    })








