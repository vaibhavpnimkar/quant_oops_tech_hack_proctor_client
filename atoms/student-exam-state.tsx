import { IExam } from "@/components/exams/exam-table-config";
import { atom } from "recoil";
const DATA_QUESTION = [
  {
    id: 1,
    question: "1What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "2What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: "3What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: "4What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: "5What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    question: "6What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question: "7What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question: "8What is the output of the following code?",
    questionType: "single_select",
    description: "```python\nprint(2 + 3)\n```",
    marks: 5,
    negatveMarks: 0,
    options: [
      {
        id: 1,
        option: "Wow what a question",
        isCorrect: false,
      },
      {
        id: 2,
        option: "Amazing question what a question",
        isCorrect: false,
      },
      {
        id: 3,
        option: "What an amazing question no one has ever asked this question",
        isCorrect: true,
      },
      {
        id: 4,
        option: "Wow what a question",
        isCorrect: false,
      },
    ],
  },
];

const DATA_EXAM_INFO = {
  startTime: "2021-09-30T18:30:00.000Z",
  duration: 60,
  name: "Google Coding Test",
  id: 2,
  totalQuestions: 8,
  examType: "multiple_choice",
  description: "This is a test exam",
  passingMarks: 10,
};

export interface IQuestion {
  id: number;
  question: string;
  questionType: string;
  description: string;
  marks: number;
  negatveMarks: number;
  options: { option: string; isCorrect: boolean; id: number }[];
}

interface IStudentExam {
  examInfo: IExam | null;
  questions: IQuestion[] | null;
  currentQuestion: number | null;
}

export const studentExamState = atom({
  key: "studentExamState",
  default: {
    examInfo: null,
    questions: null,
    currentQuestion: 1,
  } as IStudentExam,
});
