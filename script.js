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






