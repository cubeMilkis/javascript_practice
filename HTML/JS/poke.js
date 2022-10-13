const container = document.querySelector(`#container`);
const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
for(let i = 1; i <= 200; i++){
    const pokeBox = document.createElement(`li`);
    pokeBox.classList.add(`pokeBox`);
    container.appendChild(pokeBox);

    const image = document.createElement(`img`);
    image.src = `${baseURL}${i}.png`
    pokeBox.appendChild(image);

    const pokeBoxNo = document.createElement(`div`);
    pokeBoxNo.innerText = `#${i}`;
    pokeBox.appendChild(pokeBoxNo);
}
