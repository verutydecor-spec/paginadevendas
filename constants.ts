import { Testimonial, FaqItem, QuizQuestion } from './types';

export const CHECKOUT_URL = 'https://pay.kiwify.com.br/m01lLDV';
export const CHECKOUT_URL_BUMP = 'https://pay.kiwify.com.br/m01lLDV'; 

export const IDEAL_FOR_DATA = {
  idealFor: [
    'Mulheres acima de 45 anos que sentem os efeitos da menopausa.',
    'Quem busca aliviar dores nas articulações e nas costas.',
    'Quem quer aumentar a energia e a disposição para o dia a dia.',
    'Pessoas que preferem exercícios de baixo impacto, seguros e eficazes.',
    'Quem tem pouco tempo e precisa de uma rotina de exercícios rápida.',
    'Iniciantes que nunca fizeram Pilates ou atividade física antes.'
  ],
  notIdealFor: [
    'Atletas de alta performance buscando treinos de explosão.',
    'Pessoas procurando ganho de massa muscular extremo (hipertrofia).',
    'Quem busca aulas ao vivo com horários fixos.',
    'Quem possui restrições médicas severas (consulte seu médico).',
  ]
};

export const QUIZ_DATA: QuizQuestion[] = [
  {
    question: "Como você se sente com sua energia e disposição no dia a dia?",
    answers: [
      { text: "Com muita energia e vitalidade." },
      { text: "Normal, mas poderia ser melhor." },
      { text: "Cansada e sem disposição na maior parte do tempo." }
    ]
  },
  {
    question: "Qual seu maior objetivo ao pensar em fazer exercícios hoje?",
    answers: [
      { text: "Ganhar força e tonificar o corpo." },
      { text: "Aliviar dores e ter mais flexibilidade." },
      { text: "Aumentar a energia e me sentir mais jovem." }
    ]
  },
  {
    question: "O que mais te impede de seguir uma rotina de exercícios consistente?",
    answers: [
      { text: "Falta de tempo no dia a dia." },
      { text: "Falta de motivação ou exercícios monótonos." },
      { text: "Dores no corpo ou medo de me machucar." }
    ]
  }
];

export const BONUSES_DATA = [
    { title: 'Guia de Alimentação Anti-inflamatória', value: 'R$ 67,00' },
    { title: 'Áudios de Relaxamento para Alívio dos Fogachos', value: 'R$ 47,00' },
    { title: 'Checklist de Postura para o Dia a Dia', value: 'R$ 27,00' }
];

export const NOTIFICATIONS_DATA = [
  { name: 'Maria S.', city: 'São Paulo, SP' },
  { name: 'Ana P.', city: 'Rio de Janeiro, RJ' },
  { name: 'Fernanda L.', city: 'Belo Horizonte, MG' },
  { name: 'Carla M.', city: 'Porto Alegre, RS' },
  { name: 'Juliana R.', city: 'Curitiba, PR' },
  { name: 'Beatriz C.', city: 'Salvador, BA' },
  { name: 'Laura F.', city: 'Fortaleza, CE' },
  { name: 'Lúcia G.', city: 'Recife, PE' },
  { name: 'Vera T.', city: 'Goiânia, GO' },
  { name: 'Sandra B.', city: 'Brasília, DF' },
  { name: 'Rita A.', city: 'Manaus, AM' },
  { name: 'Helena V.', city: 'Belém, PA' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Sônia Almeida',
    age: 52,
    photoUrl: 'https://images.unsplash.com/photo-1571212484235-99c6c0e57ba3?w=100&h=100&fit=crop&q=80',
    text: 'Depois dos 50, achei que nunca mais me sentiria forte. O Pilates na Parede mudou tudo! Minhas dores nas costas sumiram e tenho uma energia que não sentia há anos. É libertador!'
  },
  {
    name: 'Cláudia Ribeiro',
    age: 48,
    photoUrl: 'https://images.unsplash.com/photo-1603213014769-61b6e4b89e7c?w=100&h=100&fit=crop&q=80',
    text: 'Eu estava cética, mas os resultados são incríveis. Me sinto mais flexível, minha postura melhorou e até meu humor está mais leve. Recomendo para todas as mulheres na menopausa.'
  },
  {
    name: 'Márcia Lima',
    age: 58,
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
    text: 'Fazer os exercícios em casa, no meu tempo, foi perfeito. O programa é fácil de seguir e realmente funciona. Recuperei a confiança no meu corpo e na minha força.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Preciso ter experiência com Pilates?',
    answer: 'Não! O programa foi desenhado para iniciantes e para quem nunca praticou Pilates. Os movimentos são explicados passo a passo, de forma clara e segura.'
  },
  {
    question: 'Quais equipamentos são necessários?',
    answer: 'Você só precisa de uma parede livre e um tapete de yoga ou colchonete para maior conforto. Nenhum equipamento caro ou complicado é necessário.'
  },
  {
    question: 'Em quanto tempo vejo os resultados?',
    answer: 'Muitas alunas relatam sentir mais disposição e alívio de dores já nas primeiras duas semanas. Resultados mais visíveis de força e flexibilidade costumam aparecer após o primeiro mês de prática consistente.'
  },
  {
    question: 'As aulas são ao vivo ou gravadas?',
    answer: 'As aulas são gravadas para que você possa assistir quando e onde quiser, no seu próprio ritmo. Você terá acesso vitalício a todo o conteúdo para rever sempre que precisar.'
  },
    {
    question: 'E se eu não gostar do programa?',
    answer: 'Sua satisfação é nossa prioridade. Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita, basta nos enviar um e-mail e devolvemos 100% do seu investimento.'
  }
];