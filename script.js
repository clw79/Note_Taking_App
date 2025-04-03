const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const contentInput = document.getElementById("note-content");

const url = "http://localhost:4000/notes"
function postNote(title, content) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Note Added", data);
        })
        .catch(error => {
            console.error('Error', error);
        });
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const content = contentInput.value;

    postNote(title, content);
});
