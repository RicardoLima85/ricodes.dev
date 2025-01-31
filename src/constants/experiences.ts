export const experiences = [
  {
    title: "Desenvolvedor Full-Stack",
    company: "Tech Innovators",
    startedAt: new Date(2022, 2, 1),
    endedAt: new Date(2023, 7, 1),
    description:
      "Responsável pelo desenvolvimento e manutenção de uma plataforma de e-learning com mais de 50 mil usuários ativos. No front-end, utilizei React.js com TypeScript para criar interfaces responsivas e acessíveis, implementando features como streaming de vídeo, quizzes interativos e sistema de progresso do aluno. No back-end, trabalhei com Node.js e NestJS para desenvolver APIs robustas, integrando serviços de pagamento, autenticação via OAuth2 e notificações em tempo real com WebSockets. Gerenciei a infraestrutura na AWS, utilizando EC2, RDS e S3, e implementei pipelines de CI/CD com GitHub Actions. Colaborei com uma equipe ágil de 8 desenvolvedores, participando ativamente de code reviews e mentorias para junior developers.",
  },
  {
    title: "Engenheiro de Software Sênior",
    company: "Fintech Solutions",
    startedAt: new Date(2020, 9, 1),
    endedAt: new Date(2022, 1, 1),
    description:
      "Responsável pelo desenvolvimento e manutenção de uma plataforma de e-learning com mais de 50 mil usuários ativos. No front-end, utilizei React.js com TypeScript para criar interfaces responsivas e acessíveis, implementando features como streaming de vídeo, quizzes interativos e sistema de progresso do aluno. No back-end, trabalhei com Node.js e NestJS para desenvolver APIs robustas, integrando serviços de pagamento, autenticação via OAuth2 e notificações em tempo real com WebSockets. Gerenciei a infraestrutura na AWS, utilizando EC2, RDS e S3, e implementei pipelines de CI/CD com GitHub Actions. Colaborei com uma equipe ágil de 8 desenvolvedores, participando ativamente de code reviews e mentorias para junior developers.",
  },
  {
    title: "Desenvolvedor Mobile Pleno",
    company: "HealthTech Mobile",
    startedAt: new Date(2019, 3, 1),
    endedAt: new Date(2020, 8, 1),
    description:
      "Responsável pelo desenvolvimento e manutenção de uma plataforma de e-learning com mais de 50 mil usuários ativos. No front-end, utilizei React.js com TypeScript para criar interfaces responsivas e acessíveis, implementando features como streaming de vídeo, quizzes interativos e sistema de progresso do aluno. No back-end, trabalhei com Node.js e NestJS para desenvolver APIs robustas, integrando serviços de pagamento, autenticação via OAuth2 e notificações em tempo real com WebSockets. Gerenciei a infraestrutura na AWS, utilizando EC2, RDS e S3, e implementei pipelines de CI/CD com GitHub Actions. Colaborei com uma equipe ágil de 8 desenvolvedores, participando ativamente de code reviews e mentorias para junior developers.",
  },
  {
    title: "Analista de Sistemas Júnior",
    company: "ERP Solutions",
    startedAt: new Date(2017, 6, 1),
    endedAt: new Date(2019, 2, 1),
    description:
      "Responsável pelo desenvolvimento e manutenção de uma plataforma de e-learning com mais de 50 mil usuários ativos. No front-end, utilizei React.js com TypeScript para criar interfaces responsivas e acessíveis, implementando features como streaming de vídeo, quizzes interativos e sistema de progresso do aluno. No back-end, trabalhei com Node.js e NestJS para desenvolver APIs robustas, integrando serviços de pagamento, autenticação via OAuth2 e notificações em tempo real com WebSockets. Gerenciei a infraestrutura na AWS, utilizando EC2, RDS e S3, e implementei pipelines de CI/CD com GitHub Actions. Colaborei com uma equipe ágil de 8 desenvolvedores, participando ativamente de code reviews e mentorias para junior developers.",
  },
] satisfies {
  title: string;
  company: string;
  startedAt: Date;
  endedAt: Date | null;
  description: string;
}[];
