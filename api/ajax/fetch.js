fetch('https://random-data-api.com/api/v2/users')
.then(response => response.json())
.then(data => console.log(data))

/*
fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: {
        name: 'Fabio',
        job: 'programing'
    },
    headers: {
        "Authorization": "API key dsjfalksjflkasdjflkjasdlfjasdlfjd",
        "Content-Type": "application/json"
    }
})
.then((response)=> response.json())
.then((data) => console.log(data))
.catch(error => console.log(error))
*/