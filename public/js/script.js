const { characters } = require("../../data");

fetch("/api/v1/characters")
  .then((res) => res.json())
  .then((data) => {
    renderCharacters(data)
  });

renderCharacters(characters) {
  const characterDiv = document.querySelector(".render-characters")
  const characterHTML = characters.map((character) => {
    return `
    <h1>${character.id}</h1>
    <h1>${character.Name}</h1>
    <h1>${character.Actor}</h1>
    `
  }) .join("");
  characterDiv.innerHTML = characterHTML
}

fetch("/api/v1/episodes")
  .then((res) => res.json())
  .then((data) => {
    renderEpisodes(data)
  });

renderEpisodes(episodes) {
  const episodesDiv = document.querySelector(".render-episodes")
  const episodesHTML = characters.map((episode) => {
    return `
    <h1>${episode.name}</h1>
    <h1>${episode.blurb}</h1>
    `
  }) .join("");
  episodesDiv.innerHTML = episodesHTML
}