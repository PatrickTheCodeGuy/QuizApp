export const timerOptions = [
  {
    label: "10 seconds (1.0x)",
    value: { type: "Time", time: 10, multiplier: 1.0 },
  },
  {
    label: "8 seconds (2.15x)",
    value: { type: "Time", time: 8, multiplier: 2.15 },
  },
  {
    label: "5 seconds (3.2x)",
    value: { type: "Time", time: 5, multiplier: 3.2 },
  },
  {
    label: "4 seconds (4.3x)",
    value: { type: "Time", time: 4, multiplier: 4.3 },
  },
];

export const questionDifficulty = [
  {
    label: "Random (1.0x)",
    value: { type: "Difficulty", difficulty: "Random", multiplier: 1 },
  },
  {
    label: "Easy (0.3x)",
    value: { type: "Difficulty", difficulty: "Easy", multiplier: 0.3 },
  },
  {
    label: "Medium (0.8}x)",
    value: { type: "Difficulty", difficulty: "Medium", multiplier: 0.8 },
  },
  {
    label: "Hard (1.5x)",
    value: { type: "Difficulty", difficulty: "Hard", multiplier: 1.5 },
  },
];
export const questionType = [
  "Any",
  "General Knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals & Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Games",
  "Science & Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Entertainment: Comics",
  "Science: Gadgets",
  "Entertainment: Japanese Anime & Manga",
  "Entertainment: Cartoon & Animations",
];

export const overlayStyle = {
  content: {
    fontFamily: 'Press Start 2P", cursive',
    border: "6px groove black",
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "0px 12px 25px -8px #000000",
    width: "22em",
    height: "40em",
    margin: "10% auto 0",
  },
  overlay: {
    backgroundColor: "rgb(6 214 247 / 58%)",
  },
};
