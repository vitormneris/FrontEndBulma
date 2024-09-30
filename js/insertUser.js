document.getElementById("form-insert").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    userData = {
        "name": name,
        "email": email,
        "password": password
    }

    fetch('http://18.217.116.216:8080/usuarios/salvar', {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.status === 201) {
            console.log("CREATED WITH SUCCESSFULLY")
        } else {
            console.log("ERROR. NOT CREATED")
        }
    })
    .catch(error => {
        console.log(error)
    })
})
