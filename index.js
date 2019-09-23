// Add your code here

// submitData('Ted', 'ted@gmail.com');
// debugger
document.addEventListener("DOMContentLoaded", submitData("Johnny", "j1@gmail.com"))

function submitData(username, userEmail) {
    let data = {name: `${username}`, email: `${userEmail}`};
    let configObj = {
        method: 'POST', 
        headers: {
            "Content-Type": 'application/json', 
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    let body = document.querySelector('body')
    let p = document.createElement("p");
    body.appendChild(p)

    return fetch('http://localhost:3000/users', configObj)
        .then(response => response.json())
        // .then(json=> console.log(json))
        .then(json =>  {
            appendIdToDOM(json.id)
        })
        .catch(function(error) {
            // alert("Bad things! Ragnarők!");
            p.textContent = error.message;
          });
};

function appendIdToDOM(id) {
    let h3 = document.createElement("h3")
    const body = document.querySelector('body')
    h3.textContent = "The id of the new user is " + `${id}`
    body.appendChild(h3)
    return id
}


// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// // method: "POST" is missing from the object below
// let configObj = {
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
    // .catch(function(error) {
    //   alert("Bad things! Ragnarők!");
    //   console.log(error.message);
    // });