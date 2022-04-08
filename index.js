// Add your code here


function submitData(firstName, email) {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch('http://localhost:3000/users', configObject)
    .then(res => res.json())
    .then(body => addNewContact(body.id))

    .catch(response => error(response))
    
    
}

function error (newError) {
    document.body.append(newError)
}

function addNewContact(newID) {
document.getElementsByTagName("body")[0].innerHTML = newID;

}

submitData("Name", "email")