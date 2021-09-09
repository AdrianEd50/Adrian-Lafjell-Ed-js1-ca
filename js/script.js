const url = "https://jsonplaceholder.typicode.com/users";

const detailContainer = document.querySelector(".details");

async function fetchUsers() {
  try {
    const response = await fetch(url);

    const characters = await response.json();
    console.log(characters);

    detailContainer.innerHTML = "";

    for (let i = 0; i < characters.length; i++) {
      console.log(characters[i]);

      detailContainer.innerHTML += `<a href="details.html?id=${characters[i].id}"
                                   <div class = "details"> ${characters[i].name}</div> 
                                   <div class = "name"> Username: ${characters[i].username}</div>
                                   <div class = "number"> Phone: ${characters[i].phone}</div>
                                   </a>`;
    }
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

fetchUsers();
