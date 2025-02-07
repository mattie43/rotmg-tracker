export const CLASSES = [
  {
    name: "Rogue",
    src: "https://i.imgur.com/hgiU2hA.png",
  },
  {
    name: "Archer",
    src: "https://i.imgur.com/OrNGRgy.png",
  },
  {
    name: "Wizard",
    src: "https://i.imgur.com/QAtKJFt.png",
  },
  {
    name: "Priest",
    src: "https://i.imgur.com/MPcn792.png",
  },
  {
    name: "Warrior",
    src: "https://i.imgur.com/It4sclp.png",
  },
  {
    name: "Knight",
    src: "https://i.imgur.com/snm8oKO.png",
  },
  {
    name: "Paladin",
    src: "https://i.imgur.com/caT4rO5.png",
  },
  {
    name: "Assassin",
    src: "https://i.imgur.com/Xy1Lqha.png",
  },
  {
    name: "Necromancer",
    src: "https://i.imgur.com/pmOEcsZ.png",
  },
  {
    name: "Huntress",
    src: "https://i.imgur.com/tylzyyE.png",
  },
  {
    name: "Mystic",
    src: "https://i.imgur.com/bksjGPk.png",
  },
  {
    name: "Trickster",
    src: "https://i.imgur.com/E66uyda.png",
  },
  {
    name: "Sorcerer",
    src: "https://i.imgur.com/dzsmUSA.png",
  },
  {
    name: "Ninja",
    src: "https://i.imgur.com/WS5AQZ7.png",
  },
  {
    name: "Samurai",
    src: "https://i.imgur.com/be8agu7.png",
  },
  {
    name: "Bard",
    src: "https://i.imgur.com/h5Os4xa.png",
  },
  {
    name: "Summoner",
    src: "https://i.imgur.com/4QnFwS9.png",
  },
  {
    name: "Kensei",
    src: "https://i.imgur.com/L48PGQT.png",
  },
];

export const getRandomClass = () => {
  const randomIndex = Math.floor(Math.random() * CLASSES.length);
  return CLASSES[randomIndex];
};
