const episodes = [
  {
    id: 1,
    season: 1,
    episode: 1,
    name: "Minimum Viable Product",
    blurb:
      "Richard Hendricks accidentally creates the best file compression algorithm in the world and is offered to be bought out by Gavin Belson. He takes Peter Gregory's offer of investment and starts the company with his roomates.",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    season: 1,
    episode: 2,
    name: "The Cap Table",
    blurb:
      "Richard is overwhelmed by the amount of work he needs to do and finds out that Hooli is trying to steal his algorithm.",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    season: 1,
    episode: 3,
    name: "Articles of Incorporation",
    blurb:
      "Richard and Jared find out that the name Pied Piper is already in use, and Richard attempts to buy the name from an irrigation company.",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    season: 1,
    episode: 4,
    name: "Fiduciary Duties",
    blurb:
      "Richard meets his lawyer and panics that his company is not the only compression company that Peter Gregory is invested in. Richard accidentally appoints Erlich the member of his board",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 5,
    season: 1,
    episode: 5,
    name: "Signaling Risk",
    blurb:
      "Erlich hires a graffiti artist to make Pied Pipers logo. Pied Piper learns they are in the Startup Battlefield competition at Tech Crunch",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
    season: 1,
    episode: 6,
    name: "Third Party Insourcing",
    blurb:
      "Richard hires the carver to finish the cloud aspect of Pied Piper. The carver destroys their entire code base.",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 7,
    season: 1,
    episode: 7,
    name: "Proof of Concept",
    blurb:
      "The team arrives at Startup Battlefield. They get distracted, and find that Hooli has reverse engineered their code. Jared gets stuck on an island with robot forklifts",
    characters: [1, 2, 3, 4, 5],
  },
  {
    id: 8,
    season: 1,
    episode: 8,
    name: "Optimal Tip to Tip Efficiency",
    blurb:
      "Richard removes most of the code of Pied Piper. He remakes the algorithm using middle out compression. They win Startup Battlefield and begin to get investor interest.",
    characters: [1, 2, 3, 4, 5],
  },
];

const characters = [
  { id: 1, Name: "Richard Hendricks", Actor: "Thomas Middleditch" },
  { id: 2, Name: "Bertram Gilfoyle", Actor: "Martin Starr" },
  { id: 3, Name: "Dinesh Chugtai", Actor: "Kumail Nanjiani" },
  { id: 4, Name: "Jared Dunn", Actor: "Zach Woods" },
  { id: 5, Name: "Nelson Bighetti", Actor: "Josh Brener" },
];

module.exports = {
  episodes: episodes,
  characters: characters,
};
