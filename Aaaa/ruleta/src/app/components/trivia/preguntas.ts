import { pregunta } from "./interfaces";

export const PREGUNTAS: pregunta[] = [
  {
    qestion: "¿Capital de Francia?",
    answers: [
      { text: "París", correct: true },
      { text: "Roma", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    qestion: "¿Cuánto es 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false }
    ]
  },
  {
    qestion: "¿Lenguaje usado en Angular?",
    answers: [
      { text: "Python", correct: false },
      { text: "TypeScript", correct: true },
      { text: "C#", correct: false }
    ]
  },
  {
    qestion: "¿Planeta más grande del sistema solar?",
    answers: [
      { text: "Júpiter", correct: true },
      { text: "Saturno", correct: false },
      { text: "Marte", correct: false }
    ]
  },
  {
    qestion: "¿Quién pintó la Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Picasso", correct: false },
      { text: "Van Gogh", correct: false }
    ]
  },
  // 👉 seguí agregando más preguntas acá (20, 50, 100, lo que quieras)
];
