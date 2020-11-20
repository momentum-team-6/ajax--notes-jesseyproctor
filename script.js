const url = 'http://localhost:3000/notes/'

function createNotes (noteText) { 
    fetch(url, {
        method: 'POST', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: "notes",
            body: noteText})
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

let noteText = document.querySelector('#write-note')
createNotes()



