function submitData (name, email) {
    // don't forget the 'return' before 'fetch()'!
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.textContent = object.id;
    })
    .catch(function(error) {
        document.body.innerHTML = error.message;
    });
}