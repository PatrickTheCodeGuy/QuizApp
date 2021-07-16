export const timerOptions = [
  {
    key: 0,
    label: "10 seconds (1.0x)",
    value: { type: "Time", time: 10, multiplier: 1.0 },
  },
  {
    key: 1,
    label: "8 seconds (2.15x)",
    value: { type: "Time", time: 8, multiplier: 2.15 },
  },
  {
    key: 2,
    label: "5 seconds (3.2x)",
    value: { type: "Time", time: 5, multiplier: 3.2 },
  },
  {
    key: 3,
    label: "4 seconds (4.3x)",
    value: { type: "Time", time: 4, multiplier: 4.3 },
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
    label: "Medium (0.8}x)",
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
    id: 9,
    label: "General Knowledge",
  },
  {
    id: 10,
    label: "Entertainment: Books",
  },
  {
    id: 11,
    label: "Entertainment: Film",
  },
  {
    id: 12,
    label: "Entertainment: Music",
  },
  {
    id: 13,
    label: "Entertainment: Musicals & Theatres",
  },
  {
    id: 14,
    label: "Entertainment: Television",
  },
  {
    id: 15,
    label: "Entertainment: Video Games",
  },
  {
    id: 16,
    label: "Entertainment: Board Games",
  },
  {
    id: 17,
    label: "Science & Nature",
  },
  {
    id: 18,
    label: "Science: Computers",
  },
  {
    id: 19,
    label: "Science: Mathematics",
  },
  {
    id: 20,
    label: "Mythology",
  },
  {
    id: 21,
    label: "Sports",
  },
  {
    id: 22,
    label: "Geography",
  },
  {
    id: 23,
    label: "History",
  },
  {
    id: 24,
    label: "Politics",
  },
  {
    id: 25,
    label: "Art",
  },
  {
    id: 26,
    label: "Celebrities",
  },
  {
    id: 27,
    label: "Animals",
  },
  {
    id: 28,
    label: "Vehicles",
  },
  {
    id: 29,
    label: "Entertainment: Comics",
  },
  {
    id: 30,
    label: "Science: Gadgets",
  },
  {
    id: 31,
    label: "Entertainment: Japanese Anime & Manga",
  },
  {
    id: 32,
    label: "Entertainment: Cartoon & Animations",
  },
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
