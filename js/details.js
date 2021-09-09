const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://jsonplaceholder.typicode.com/users/" + id;

async function getCharacter() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    container.innerHTML = `<div class = "details">${details.name}</div>
                         <div class = "name"> Username: ${details.username}</div>
                         <div class = "number"> Phone: ${details.phone}</div>
                         <div> Email: ${details.email}</div>
                         <div> Website: ${details.website}</div>`;
  } catch (error) {
    console.log(error);
  }
}

getCharacter();
