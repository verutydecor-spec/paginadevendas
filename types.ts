
export interface Testimonial {
  name: string;
  age: number;
  photoUrl: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuizAnswer {
  text: string;
}

export interface QuizQuestion {
  question: string;
  answers: QuizAnswer[];
}
