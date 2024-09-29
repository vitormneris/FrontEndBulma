fetch('http://0.0.0.0:8080/usuarios/listartodos', {
    method: 'GET',
})
.then(response => {
    if (response.status === 200) {
        return response.json()
    } else {
        console.log("ERROR. NOT FOUND")
    }
}).then(data => {
    showData(data)
})
.catch(error => {
    console.log(error)
})

function showData(data) {
    const div = document.getElementById('dataList')
    const table = document.createElement('table')

    table.setAttribute("class", "table is-fullwidth")

    const caption = document.createElement("caption")
    caption.textContent = "Visualização de usuários"
    caption.setAttribute("class", "title")
    table.appendChild(caption)

    const tr = document.createElement('tr')
    const thId = document.createElement("th")
    thId.textContent = "Id"
    tr.appendChild(thId)

    const thName = document.createElement("th")
    thName.textContent = "Name"
    tr.appendChild(thName)

    const thEmail = document.createElement("th")
    thEmail.textContent = "E-mail"
    tr.appendChild(thEmail)

    const thPassword = document.createElement("th")
    thPassword.textContent = "Password"
    tr.appendChild(thPassword)

    table.appendChild(tr)

    data.forEach(element => {
        const tr = document.createElement('tr')

        const tdId = document.createElement("td")
        tdId.textContent = element.id
        tr.appendChild(tdId)
        
        const tdName= document.createElement("td")
        tdName.textContent = element.name
        tr.appendChild(tdName)

        const tdEmail = document.createElement("td")
        tdEmail.textContent = element.email
        tr.appendChild(tdEmail)

        const tdPassword = document.createElement("td")
        tdPassword.textContent = element.password
        tr.appendChild(tdPassword)

        table.appendChild(tr)
        div.appendChild(table)
    })
}
