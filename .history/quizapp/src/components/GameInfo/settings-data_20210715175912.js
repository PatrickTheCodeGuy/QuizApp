export const timerOptions = [
  { label: "10 seconds (1.0x)", value: { time: 10, multiplier: 1.0 } },
  { label: "8 seconds (1.25x)", value: { time: 8, multiplier: 1.25 } },
  { label: "5 seconds (1.5x)", value: { time: 5, multiplier: 1.5 } },
  { label: "4 seconds (1.75x)", value: { time: 4, multiplier: 1.75 } },
];

export const questionDifficulty = [
  {
    label: "Random (1.0x)",
    value: { type: "Difficulty", difficulty: "Random", multiplier: 1 },
  },
  {
    label: "Easy (0.5x)",
    value: { type: "Difficulty", difficulty: "Easy", multiplier: 0.5 },
  },
  {
    label: "Medium (1.25x)",
    value: { type: "Difficulty", difficulty: "Medium", multiplier: 1.25 },
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
