export const timerOptions = [
  {
    key: 0,
    label: "10 seconds (3.0x)",
    value: { type: "Time", time: 10, multiplier: 3 },
  },
  {
    key: 1,
    label: "8 seconds (3.5x)",
    value: { type: "Time", time: 8, multiplier: 3.5 },
  },
  {
    key: 2,
    label: "5 seconds (4.2x)",
    value: { type: "Time", time: 5, multiplier: 4.2 },
  },
  {
    key: 3,
    label: "4 seconds (4.8x)",
    value: { type: "Time", time: 4, multiplier: 4.8 },
  },
];

export const questionDifficulty = [
  {
    key: 0,
    label: "Random (1.0x)",
    value: { type: "Difficulty", difficulty: "Random", multiplier: 1 },
  },
  {
    key: 1,
    label: "Easy (0.3x)",
    value: { type: "Difficulty", difficulty: "Easy", multiplier: 0.3 },
  },
  {
    key: 2,
    label: "Medium (0.8x)",
    value: { type: "Difficulty", difficulty: "Medium", multiplier: 0.8 },
  },
  {
    key: 3,
    label: "Hard (1.5x)",
    value: { type: "Difficulty", difficulty: "Hard", multiplier: 1.5 },
  },
];
export const questionType = [
  {
    value: 0,
    label: "Any",
  },
  {
    value: 9,
    label: "General Knowledge",
  },
  {
    value: 10,
    label: "Entertainment: Books",
  },
  {
    value: 11,
    label: "Entertainment: Film",
  },
  {
    value: 12,
    label: "Entertainment: Music",
  },
  {
    value: 13,
    label: "Entertainment: Musicals & Theatres",
  },
  {
    value: 14,
    label: "Entertainment: Television",
  },
  {
    value: 15,
    label: "Entertainment: Video Games",
  },
  {
    value: 16,
    label: "Entertainment: Board Games",
  },
  {
    value: 17,
    label: "Science & Nature",
  },
  {
    value: 18,
    label: "Science: Computers",
  },
  {
    value: 19,
    label: "Science: Mathematics",
  },
  {
    value: 20,
    label: "Mythology",
  },
  {
    value: 21,
    label: "Sports",
  },
  {
    value: 22,
    label: "Geography",
  },
  {
    value: 23,
    label: "History",
  },
  {
    value: 24,
    label: "Politics",
  },
  {
    value: 25,
    label: "Art",
  },
  {
    value: 26,
    label: "Celebrities",
  },
  {
    value: 27,
    label: "Animals",
  },
  {
    value: 28,
    label: "Vehicles",
  },
  {
    value: 29,
    label: "Entertainment: Comics",
  },
  {
    value: 30,
    label: "Science: Gadgets",
  },
  {
    value: 31,
    label: "Entertainment: Japanese Anime & Manga",
  },
  {
    value: 32,
    label: "Entertainment: Cartoon & Animations",
  },
];

export const overlayStyle = {
  content: {
    fontFamily: 'Press Start 2P", cursive',
    border: "6px groove black",
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: " 0px 22px 25px -5px; #000000",
    width: "30em",
    height: "45em",
    margin: "3% auto 0",
  },
  overlay: {
    backgroundColor: "rgb(6 214 247 / 58%)",
  },
};
